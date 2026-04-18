import { prisma } from "$lib/server/prisma";
import { redirect, type Actions } from "@sveltejs/kit";

export const actions = {
  default: async ({ request, locals }) => {
    if (!locals.user) {
      return redirect(302, "/login");
    }

    const formData = await request.formData();

    const name = formData.get("name") as string;

    if (!name) {
      return {
        success: false,
        error: "Name is required",
      };
    }

    await prisma.provisionalAuthor.create({
      data: {
        name,
      },
    });

    return {
      success: true,
    };
  }
} satisfies Actions;
