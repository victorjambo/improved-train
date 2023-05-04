import { PrismaClient } from "@prisma/client";
import BaseModel from "./BaseModel";

class SupplyChainItemModel extends BaseModel {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  getItemById(id: number) {
    return this.prisma.supplyChainItem.findUnique({ where: { id } });
  }

  getItems() {
    return this.prisma.supplyChainItem.findMany();
  }
}

export default SupplyChainItemModel;