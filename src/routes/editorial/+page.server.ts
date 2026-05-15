import { prisma } from "$lib/server/prisma"
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, url }) => {
  const page = url.searchParams.get("page") || "1";
  const kind = url.searchParams.get("kind") || undefined;

  const [posts, totalPostCount, postKinds] = await Promise.all([
    prisma.post.findMany({
      include: {
        content: false,
        postKind: true,
        author: true,
        provisionalAuthor: true,
      },
      where: {
        postKind: {
          name: kind,
        }
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 6,
      skip: (Number(page) - 1) * 6,
    }),

    prisma.post.count({
      where: {
        postKind: {
          name: kind,
        }
      },
    }),

    prisma.postKind.findMany(),
  ]);

  let pageCount = Math.ceil(totalPostCount / 6);

  return {
    posts,
    postKinds,
    user: locals.user,
    pageCount,
    url,
  }
}
