import { prisma } from "$lib/server/prisma"
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  const posts = await prisma.post.findMany({
    include: {
      content: false,
      postKind: true,
      author: true,
      provisionalAuthor: true,
    }
  });

  const postKinds = await prisma.postKind.findMany();

  return {
    posts,
    postKinds,
    user: locals.user,
  }
}
