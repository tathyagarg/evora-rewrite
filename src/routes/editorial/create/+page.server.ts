import type bcrypt from "bcryptjs";
import type { PageServerLoad } from "../$types";
import { redirect, type Actions } from "@sveltejs/kit";
import { fail } from "node:assert";
import { prisma } from "$lib/server/prisma";

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user) {
    return redirect(401, "/posts?error=unauth");
  }

  const postKinds = await prisma.postKind.findMany();

  return {
    postKinds,
  }
}

export const actions = {
  publish: async ({ request, locals }) => {
    if (!locals.user) {
      return redirect(401, "/posts?error=unauth");
    }

    const data = await request.formData();

    const title = data.get("title");
    const quote = data.get("quote");
    const content = data.get("content");
    const kind = data.get("kind");
    const image = data.get("image");

    if (typeof title !== "string" || typeof content !== "string") {
      return fail("Invalid form data");
    }

    const slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

    await prisma.post.create({
      data: {
        slug,
        title,
        quote: typeof quote === "string" ? quote : null,
        content,
        imgUrl: typeof image === "string" ? image : null,
        postKindId: typeof kind === "string" ? parseInt(kind) : null,
        authorId: locals.user.id,
      },
    });

    return { success: true };
  }
} satisfies Actions;
