/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "newsletter_model" (
    "address" STRING NOT NULL,
    "paid" BOOL NOT NULL DEFAULT false,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tablesText" STRING,
    "tablesImg" STRING,
    "upcomingEvents" STRING,
    "whatsUpNow" STRING,
    "recommendedReads" STRING,
    "shoutouts" STRING,
    "subscribers" STRING[],

    CONSTRAINT "newsletter_model_pkey" PRIMARY KEY ("address")
);

-- CreateIndex
CREATE UNIQUE INDEX "newsletter_model_address_key" ON "newsletter_model"("address");
