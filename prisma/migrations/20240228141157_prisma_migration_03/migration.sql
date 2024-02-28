/*
  Warnings:

  - You are about to drop the column `tablesImg` on the `newsletter_model` table. All the data in the column will be lost.
  - You are about to drop the column `tablesText` on the `newsletter_model` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "newsletter_model" DROP COLUMN "tablesImg";
ALTER TABLE "newsletter_model" DROP COLUMN "tablesText";
