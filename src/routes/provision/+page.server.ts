import { prisma } from "$lib/server/prisma";
import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import { hasPerm, PROVISION_AUTHOR_CREATE } from "$lib/perms";

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user) {
    return redirect(302, "/login");
  }

  if (!hasPerm(locals.user.role, PROVISION_AUTHOR_CREATE)) {
    return redirect(302, "/");
  }
}

export const actions = {
  default: async ({ request, locals }) => {
    if (!locals.user) {
      return redirect(302, "/login");
    }

    if (!hasPerm(locals.user.role, PROVISION_AUTHOR_CREATE)) {
      return redirect(302, "/");
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
