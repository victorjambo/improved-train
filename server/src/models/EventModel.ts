import { PrismaClient } from "@prisma/client";
import BaseModel from "./BaseModel";
import { CreateEventReqBody, UpdateEventReqBody } from "../types";

class EventModel extends BaseModel {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  getEventById(itemId: number, eventId: number) {
    return this.prisma.event.findFirstOrThrow({
      where: {
        AND: {
          id: eventId,
          supplyChainItemId: itemId,
        },
      },
      include: {
        custodian: {
          select: {
            id: true,
            name: true,
          },
        },
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

  getEvents(itemId: number) {
    return this.prisma.event.findMany({
      where: {
        supplyChainItemId: itemId,
      },
      include: {
        custodian: {
          select: {
            id: true,
            name: true,
          },
        },
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

  async createEvent(
    creatorId: number,
    itemId: number,
    event: CreateEventReqBody
  ) {
    const foundItem = await this.prisma.supplyChainItem.findFirstOrThrow({
      where: { id: itemId },
    });

    const foundUser = await this.prisma.user.findFirstOrThrow({
      where: { id: creatorId },
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
      include: {
        custodian: {
          select: {
            id: true,
            name: true,
          },
        },
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

  async updateEvent(itemId: number, eventId: number, event: UpdateEventReqBody) {
    const foundEvent = await this.prisma.event.findFirstOrThrow({
      where: {
        AND: {
          id: eventId,
          supplyChainItemId: itemId,
        },
      },
    });
    return this.prisma.event.update({
      where: {
        id: foundEvent.id,
      },
      data: event,
      include: {
        custodian: {
          select: {
            id: true,
            name: true,
          },
        },
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
}

export default EventModel;
