import { PrismaClient } from "@prisma/client";
import BaseModel from "./BaseModel";

class CustodianModel extends BaseModel {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  getCustodians() {
    return this.prisma.custodian.findMany();
  }
}

export default CustodianModel;
