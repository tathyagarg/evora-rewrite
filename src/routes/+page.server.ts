// import type { PageServerLoad } from "./$types";
// import { db } from "$lib/server/db";
// import { desc, eq, sql } from "drizzle-orm";
// import { event } from "$lib/server/db/schema";
// import type { EventPreviewData } from "$lib/models";
// 
// export const load: PageServerLoad = async () => {
//   const events = await db.select({
//     slug: event.slug,
//     title: event.title,
//     description: event.description,
//     start_date: event.startDate,
//     end_date: event.endDate,
//     location: event.location,
//     img_url: event.imgUrl,
//     has_recap: sql`${event.recap} IS NOT NULL`,
//   })
//     .from(event)
//     .orderBy(desc(event.startDate))
//     .limit(6);
// 
//   return {
//     events: events as EventPreviewData[],
//   }
// }

import { prisma } from "$lib/server/prisma";
import type { PageServerLoad } from "./editorial/$types";

export const load: PageServerLoad = async ({ locals }) => {
  const events = await prisma.event.findMany({
    take: 6,
    orderBy: { start: "desc" },
  })

  return {
    events,
  }
}
