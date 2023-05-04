import { PrismaClient } from "@prisma/client";
import BaseModel from "./BaseModel";
import { CreateItemRequestBody, UpdateItemRequestBody } from "../types";

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

  async createItem(item: CreateItemRequestBody) {
    // find creator first
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: item.creatorId },
    });

    return this.prisma.supplyChainItem.create({
      data: {
        ...item,
        creatorId: user.id,
      },
    });
  }

  async updateItem(id: number, item: UpdateItemRequestBody) {
    const foundItem = await this.prisma.supplyChainItem.findUniqueOrThrow({
      where: { id },
    });

    return this.prisma.user.update({
      where: {
        id: foundItem.id,
      },
      data: item,
    });
  }

  async deleteItem(id: number) {
    const foundItem = await this.prisma.supplyChainItem.findUniqueOrThrow({
      where: { id },
    });

    return this.prisma.supplyChainItem.delete({
      where: {
        id: foundItem.id,
      },
    });
  }
}

export default SupplyChainItemModel;
