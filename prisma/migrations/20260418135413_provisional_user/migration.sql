-- CreateTable
CREATE TABLE "ProvisionalAuthor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ProvisionalAuthor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProvisionalAuthor_name_key" ON "ProvisionalAuthor"("name");
