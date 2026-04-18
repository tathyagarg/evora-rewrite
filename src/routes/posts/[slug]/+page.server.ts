import { prisma } from "$lib/server/prisma";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async ({ params }) => {
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

  return {
    post,
  }
}
