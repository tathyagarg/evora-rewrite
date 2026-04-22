import { prisma } from "$lib/server/prisma";
import type { Actions } from "@sveltejs/kit";
import bcrypt from "bcryptjs";
import crypto from "crypto";

export const prerender = false;

async function upgradeProvisional(name: string, password: string): Promise<string> {
  const existingProvisional = await prisma.provisionalAuthor.findUnique({
    where: { name },
  });

  if (existingProvisional) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.author.create({
      data: {
        name,
        password: hashedPassword,
      },
    });

    await prisma.provisionalAuthor.delete({ where: { id: existingProvisional.id } });

    const token = crypto.randomBytes(32).toString("hex");

    await prisma.session.create({
      data: {
        authorId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
        token,
      },
    });

    return token;
  }

  return "";
}

export const actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();

    const username = data.get("username");
    const password = data.get("password");

    if (typeof username !== "string" || typeof password !== "string") {
      return { success: false, error: "Invalid form data" };
    }

    const user = await prisma.author.findUnique({ where: { name: username } });
    if (!user) {
      var token = await upgradeProvisional(username, password);
    } else {

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return { success: false, error: "Invalid username or password" };
      }

      var token = crypto.randomBytes(32).toString("hex");

      await prisma.session.create({
        data: {
          authorId: user.id,
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
          token,
        },
      });
    }

    cookies.set("sessionId", token, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return { success: true };
  },

  logout: async ({ cookies }) => {
    cookies.delete("sessionId", { path: "/" });
    return { success: true };
  }
} satisfies Actions;
