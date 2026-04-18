import { prisma } from "$lib/server/prisma"
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  const posts = await prisma.post.findMany({
    take: 6,
    include: {
      content: false,
      postKind: true,
      author: true,
    }
  });

  return {
    posts,
    user: locals.user,
  }
}
