/*
  Warnings:

  - You are about to drop the column `address` on the `newsletter_model` table. All the data in the column will be lost.
  - You are about to drop the column `paid` on the `newsletter_model` table. All the data in the column will be lost.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_newsletter_model" (
    "createdDate" TIMESTAMP(3) NOT NULL,
    "tablesText" STRING,
    "tablesImg" STRING,
    "upcomingEvents" STRING,
    "whatsUpNow" STRING,
    "recommendedReads" STRING,
    "shoutouts" STRING,
    "subscribers" STRING[],

    CONSTRAINT "newsletter_model_pkey" PRIMARY KEY ("createdDate")
);
DROP INDEX "newsletter_model_address_key";
INSERT INTO "_prisma_new_newsletter_model" ("createdDate","recommendedReads","shoutouts","subscribers","tablesImg","tablesText","upcomingEvents","whatsUpNow") SELECT "createdDate","recommendedReads","shoutouts","subscribers","tablesImg","tablesText","upcomingEvents","whatsUpNow" FROM "newsletter_model";
DROP TABLE "newsletter_model" CASCADE;
ALTER TABLE "_prisma_new_newsletter_model" RENAME TO "newsletter_model";
CREATE UNIQUE INDEX "newsletter_model_createdDate_key" ON "newsletter_model"("createdDate");
