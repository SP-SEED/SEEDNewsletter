-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "Users" ADD COLUMN     "recommendedReads" STRING;
ALTER TABLE "Users" ADD COLUMN     "shoutouts" STRING;
ALTER TABLE "Users" ADD COLUMN     "subscribers" STRING[];
ALTER TABLE "Users" ADD COLUMN     "tablesImg" STRING;
ALTER TABLE "Users" ADD COLUMN     "tablesText" STRING;
ALTER TABLE "Users" ADD COLUMN     "upcomingEvents" STRING;
ALTER TABLE "Users" ADD COLUMN     "whatsUpNow" STRING;
