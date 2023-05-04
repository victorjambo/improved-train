import { Request, Response } from "express";

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface EventControllerInterface {
  getEvent(req: Request, res: Response): Promise<void>;
}

class EventController implements EventControllerInterface {
  async getEvent(req: Request, res: Response): Promise<void> {
    try {
      const newUser = await prisma.user.create({
        data: {
          name: 'Alice',
          email: 'alice@prisma.io',
        },
      })
      console.log('Created new user: ', newUser)
      const allUsers = await prisma.user.findMany()
      console.log('All users: ')
      console.dir(allUsers, { depth: null })
    } catch (error) {
      console.log(error);
      
    }
    try {
      res.status(200).json({
        status: "SUCCESS",
        message: "Get Event",
        data: {
          id: "1234",
          user: {
            id: "1234",
            name: "victor",
          },
          custodian: {
            id: "1234",
            name: "Kentex",
          },
          location: "Nairobi",
        },
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  }
}

export default EventController;
