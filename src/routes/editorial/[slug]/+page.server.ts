import { prisma } from "$lib/server/prisma";
import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async ({ params, locals }) => {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug },
    include: {
      author: true,
      postKind: true,
    }
  });

  if (!post) {
    return {
      status: 404,
      error: new Error("Post not found"),
    };
  }

  console.log("post: ", post);

  return {
    post,
    user: locals.user,
  }
}

export const actions = {
  delete: async ({ params, locals, request }) => {
    const data = await request.formData();

    const authorId = parseInt(
      data.get("authorId") as string
    ) || 0;

    if (!locals.user) {
      return {
        success: false,
        error: "Not authenticated",
      };
    }

    if (locals.user.id !== authorId) {
      return {
        success: false,
        error: "Not authorized",
      }
    }

    await prisma.post.delete({
      where: { slug: params.slug },
    });

    throw redirect(302, "/");
  }
} satisfies Actions;
