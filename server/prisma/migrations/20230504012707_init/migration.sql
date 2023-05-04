/*
  Warnings:

  - You are about to drop the `ItemEvent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ItemEvent" DROP CONSTRAINT "ItemEvent_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "ItemEvent" DROP CONSTRAINT "ItemEvent_custodianId_fkey";

-- DropForeignKey
ALTER TABLE "ItemEvent" DROP CONSTRAINT "ItemEvent_supplyChainItemId_fkey";

-- DropTable
DROP TABLE "ItemEvent";

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "location" TEXT,
    "creatorId" INTEGER,
    "custodianId" INTEGER,
    "supplyChainItemId" INTEGER,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_custodianId_fkey" FOREIGN KEY ("custodianId") REFERENCES "Custodian"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_supplyChainItemId_fkey" FOREIGN KEY ("supplyChainItemId") REFERENCES "SupplyChainItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
