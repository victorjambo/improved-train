import { PrismaClient } from "@prisma/client";
import BaseModel from "./BaseModel";
import { CreateItemRequestBody, UpdateItemRequestBody } from "../types";

class SupplyChainItemModel extends BaseModel {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  getItemById(id: number) {
    return this.prisma.supplyChainItem.findUnique({
      where: { id },
      include: {
        creator: true,
      },
    });
  }

  getItems() {
    return this.prisma.supplyChainItem.findMany({
      include: {
        creator: true,
      },
    });
  }

  async createItem(item: CreateItemRequestBody) {
    // find creator first
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: +item.creatorId }, // TODO Auth
    });

    return this.prisma.supplyChainItem.create({
      data: {
        ...item,
        creatorId: user.id,
      },
      include: {
        creator: true,
      },
    });
  }

  async updateItem(id: number, item: UpdateItemRequestBody) {
    const foundItem = await this.prisma.supplyChainItem.findUniqueOrThrow({
      where: { id },
    });

    return this.prisma.supplyChainItem.update({
      where: {
        id: foundItem.id,
      },
      data: item,
      include: {
        creator: true,
      },
    });
  }

  async deleteItem(id: number) {
    const foundItem = await this.prisma.supplyChainItem.findUniqueOrThrow({
      where: { id },
      include: {
        creator: true,
      },
    });

    return this.prisma.supplyChainItem.delete({
      where: {
        id: foundItem.id,
      },
    });
  }
}

export default SupplyChainItemModel;
