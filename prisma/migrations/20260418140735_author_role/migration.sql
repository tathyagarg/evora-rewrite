-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Author', 'Admin', 'SuperAdmin');

-- AlterTable
ALTER TABLE "Author" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'Author';
