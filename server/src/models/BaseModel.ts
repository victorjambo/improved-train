import { PrismaClient } from "@prisma/client";

class BaseModel {
  protected prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }
}

export default BaseModel;
