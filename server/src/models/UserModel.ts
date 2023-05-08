import { PrismaClient } from "@prisma/client";
import BaseModel from "./BaseModel";

class UserModel extends BaseModel {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  getUserById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  getUserItems(creatorId: number) {
    return this.prisma.supplyChainItem.findMany({
      where: { creatorId },
      orderBy: {
        createdAt: "asc",
      },
    });
  }
}

export default UserModel;
