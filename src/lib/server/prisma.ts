import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import "dotenv/config";

export const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.PRISMA_DATABASE_URL,
  }),
});
