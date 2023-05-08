import { PrismaClient } from "@prisma/client";
import BaseModel from "./BaseModel";
import { CreateItemRequestBody, UpdateItemRequestBody } from "../types";

class SupplyChainItemModel extends BaseModel {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  getItemById(id: number) {
    return this.prisma.supplyChainItem.findFirstOrThrow({
      where: { id },
      include: {
        creator: {
          select: {
            email: true,
            name: true,
            id: true,
          },
        },
      },
    });
  }

  getItems(skip?: number, take?: number, query?: string) {
    return this.prisma.supplyChainItem.findMany({
      ...(skip && { skip }),
      ...(take && { take }),
      ...(query && {
        where: {
          title: {
            contains: query,
            mode: 'insensitive',
          },
        },
      }),
      orderBy: {
        createdAt: "asc",
      },
      include: {
        creator: {
          select: {
            email: true,
            name: true,
            id: true,
          },
        },
      },
    });
  }

  async createItem(creatorId: string, item: CreateItemRequestBody) {
    // find creator first
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: +creatorId },
    });

    return this.prisma.supplyChainItem.create({
      data: {
        ...item,
        creatorId: user.id,
      },
      include: {
        creator: {
          select: {
            email: true,
            name: true,
            id: true,
          },
        },
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
        creator: {
          select: {
            email: true,
            name: true,
            id: true,
          },
        },
      },
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
