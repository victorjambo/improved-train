/*
  Warnings:

  - You are about to drop the column `name` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `SupplyChainItem` table. All the data in the column will be lost.
  - Added the required column `title` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `SupplyChainItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `SupplyChainItem` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'SHIPPING', 'DELIVERED');

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "name",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SupplyChainItem" DROP COLUMN "name",
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
