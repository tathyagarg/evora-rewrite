export const PROVISION_AUTHOR_CREATE = "provisional_author_create";
export const POST_DELETE = "post_delete";

const AUTHOR = "Author";
const ADMIN = "Admin";
const SUPER_ADMIN = "SuperAdmin";

const PERMS: Record<string, string[]> = {
  ADMIN: [PROVISION_AUTHOR_CREATE, POST_DELETE],
  SUPER_ADMIN: [PROVISION_AUTHOR_CREATE, POST_DELETE],
}

export function hasPerm(role: string, permission: string) {
  const perms = PERMS[role];

  if (!perms) {
    return false;
  }

  return perms.includes(permission);
}
