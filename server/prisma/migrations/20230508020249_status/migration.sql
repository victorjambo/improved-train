/*
  Warnings:

  - You are about to drop the column `status` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "status";

-- AlterTable
ALTER TABLE "SupplyChainItem" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';
