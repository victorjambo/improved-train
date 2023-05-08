-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_supplyChainItemId_fkey";

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_supplyChainItemId_fkey" FOREIGN KEY ("supplyChainItemId") REFERENCES "SupplyChainItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
