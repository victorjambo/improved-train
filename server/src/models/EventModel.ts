import { PrismaClient } from "@prisma/client";
import BaseModel from "./BaseModel";
import { CreateEventReqBody, UpdateEventReqBody } from "../types";

class EventModel extends BaseModel {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  getEventById(itemId: number, eventId: number) {
    return this.prisma.event.findFirst({
      where: {
        AND: {
          id: eventId,
          supplyChainItemId: itemId,
        },
      },
    });
  }

  getEvents(itemId: number) {
    return this.prisma.event.findMany({
      where: {
        supplyChainItemId: itemId,
      },
    });
  }

  async createEvent(itemId: number, event: CreateEventReqBody) {
    const foundItem = await this.prisma.supplyChainItem.findFirstOrThrow({
      where: { id: itemId },
    });
    const foundUser = await this.prisma.user.findFirstOrThrow({
      where: { id: event.creatorId },
    });

    // Can this check be done at controller level?
    const foundCustodian = await this.prisma.custodian.findFirstOrThrow({
      where: { id: event.custodianId },
    });

    return this.prisma.event.create({
      data: {
        ...event,
        supplyChainItemId: foundItem.id,
        creatorId: foundUser.id,
        custodianId: foundCustodian.id,
      },
    });
  }

  async updateEvent(eventId: number, event: UpdateEventReqBody) {
    const foundEvent = await this.prisma.event.findUniqueOrThrow({
      where: { id: eventId },
    });
    return this.prisma.event.update({
      where: {
        id: foundEvent.id,
      },
      data: event,
    });
  }
}

export default EventModel;
