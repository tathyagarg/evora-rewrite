import { prisma } from "$lib/server/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const events = await prisma.event.findMany({
    orderBy: [{
      start: "desc",
    }]
  })

  return { events }

  // const events = await db.select({
  //   slug: event.slug,
  //   title: event.title,
  //   description: event.description,
  //   start_date: event.startDate,
  //   end_date: event.endDate,
  //   location: event.location,
  //   img_url: event.imgUrl,
  //   has_recap: sql`${event.recap} IS NOT NULL`,
  // })
  //   .from(event)
  //   .orderBy(desc(event.startDate))

  // return {
  //   events: events as EventPreviewData[],
  // }
}
