import { PrismaClient } from "@prisma/client";
import BaseModel from "./BaseModel";

class EventModel extends BaseModel {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  getEventById(id: number) {
    return this.prisma.supplyChainItem.findUnique({ where: { id } });
  }

  getEvents() {
    return this.prisma.event.findMany();
  }
}

export default EventModel;
