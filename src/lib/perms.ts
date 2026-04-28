export const PROVISION_AUTHOR_CREATE = "provisional_author_create";
export const POST_DELETE = "post_delete";
export const CREATE_POST = "create_post";

const AUTHOR = "Author";
const ADMIN = "Admin";
const SUPER_ADMIN = "SuperAdmin";

const PERMS: Record<string, string[]> = {
  Admin: [PROVISION_AUTHOR_CREATE, POST_DELETE, CREATE_POST],
  SuperAdmin: [PROVISION_AUTHOR_CREATE, POST_DELETE, CREATE_POST],
  Author: [CREATE_POST],
}

export function hasPerm(role: string, permission: string) {
  const perms = PERMS[role];

  if (!perms) {
    return false;
  }

  return perms.includes(permission);
}
