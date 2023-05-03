import { Request, Response } from "express";

export interface EventControllerInterface {
  getEvent(req: Request, res: Response): Promise<void>;
}

class EventController implements EventControllerInterface {
  async getEvent(req: Request, res: Response): Promise<void> {
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
