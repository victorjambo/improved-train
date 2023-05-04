import { Request, Response } from "express";
import { eventModel } from "../models";

class EventController {
  async getEvent(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const data = await eventModel.getEventById(+id);
      res.status(200).json({
        status: "SUCCESS",
        message: "Get Event",
        data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  }

  async getEvents(req: Request, res: Response): Promise<void> {
    try {
      const data = await eventModel.getEvents();
      res.status(200).json({
        status: "SUCCESS",
        message: "Get Events",
        data,
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
