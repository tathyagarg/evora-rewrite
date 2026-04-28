import type { PageServerLoad } from "../$types";
import { redirect, type Actions } from "@sveltejs/kit";
import { fail } from "node:assert";
import { prisma } from "$lib/server/prisma";
import { CREATE_POST, hasPerm } from "$lib/perms";

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user) {
    return redirect(301, "/editorial?error=unauth");
  }

  if (!hasPerm(locals.user.role, CREATE_POST)) {
    return redirect(301, "/editorial?error=forbidden");
  }

  const postKinds = await prisma.postKind.findMany();
  const authorNames = (await prisma.author.findMany()).map((a) => a.name);
  const provAuthorNames = (await prisma.provisionalAuthor.findMany()).map((a) => a.name);

  const names = new Set([...authorNames, ...provAuthorNames]);

  return {
    postKinds,
    user: locals.user,
    authorNames: Array.from(names),
  }
}

export const actions = {
  publish: async ({ request, locals }) => {
    if (!locals.user) {
      return redirect(301, "/editorial?error=unauth");
    }

    if (!hasPerm(locals.user.role, CREATE_POST)) {
      return redirect(301, "/editorial?error=forbidden");
    }

    const data = await request.formData();

    const title = data.get("title");
    const quote = data.get("quote");
    const content = data.get("content");
    const kind = data.get("kind");
    const image = data.get("image");
    const author = data.get("author");

    if (typeof title !== "string" || typeof content !== "string") {
      return fail("Invalid form data");
    }

    const authorObj = await prisma.author.findFirst({
      where: {
        name: typeof author === "string" ? author : "",
      },
    });

    const provAuthorObj = await prisma.provisionalAuthor.findFirst({
      where: {
        name: typeof author === "string" ? author : "",
      },
    });

    if (!authorObj && !provAuthorObj) {
      return fail("Author not found");
    }

    const slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

    await prisma.post.create({
      data: {
        slug,
        title,
        quote: typeof quote === "string" ? quote : "",
        content,
        imgUrl: typeof image === "string" ? image : null,
        postKindId: typeof kind === "string" ? parseInt(kind) : 0,
        authorId: authorObj ? authorObj.id : null,
        provisionalAuthorId: provAuthorObj ? provAuthorObj.id : null,
      },
    });

    return { success: true };
  }
} satisfies Actions;
