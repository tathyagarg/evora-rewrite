
import { prisma } from '$lib/server/prisma';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const sessionId = event.cookies.get("sessionId");

  if (sessionId) {
    const session = await prisma.session.findUnique({
      where: { token: sessionId },
      include: {
        author: {
          select: {
            password: false,
            id: true,
            name: true,
            role: true,
          }
        },
      }
    });


    if (session && session.expiresAt > new Date()) {
      event.locals.user = session.author;
    } else {
      event.locals.user = null;
    }
  } else {
    event.locals.user = null;
  }

  const result = await resolve(event);
  return result;
};
