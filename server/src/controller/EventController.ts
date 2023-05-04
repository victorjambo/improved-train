import { Request, Response } from "express";
import { eventModel } from "../models";

class EventController {
  async getEvent(req: Request, res: Response): Promise<void> {
    try {
      const itemId = req.params.itemId;
      const eventId = req.params.eventId;
      const data = await eventModel.getEventById(+itemId, +eventId);
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
      const itemId = req.params.itemId;

      const data = await eventModel.getEvents(+itemId);
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

  async createEvent(req: Request, res: Response): Promise<void> {
    try {
      const itemId = req.params.itemId;
      const event = req.body;

      const data = await eventModel.createEvent(+itemId, event);
      res.status(201).json({
        status: "SUCCESS",
        message: "Create Event",
        data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  }

  async updateEvent(req: Request, res: Response): Promise<void> {
    try {
      const itemId = req.params.itemId;
      const eventId = req.params.eventId;
      const event = req.body;

      const data = await eventModel.updateEvent(+eventId, event);
      res.status(200).json({
        status: "SUCCESS",
        message: "Update Event",
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
