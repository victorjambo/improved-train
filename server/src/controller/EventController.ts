import { Request, Response } from "express";
import { eventModel } from "../models";
import { isJsonEmpty, validator } from "../middleware/validators";
import {
  sanitizeCreateEvent,
  sanitizeUpdateEvent,
} from "../middleware/sanitizer";

class EventController {
  @validator
  async getEvent(req: Request, res: Response): Promise<void> {
    try {
      const itemId = req.params.itemId;
      const eventId = req.params.eventId;
      const data = await eventModel.getEventById(+itemId, +eventId);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }

  @validator
  async getEvents(req: Request, res: Response): Promise<void> {
    try {
      const itemId = req.params.itemId;
      const limit = parseInt(req.query.limit as string);
      const offset = parseInt(req.query.offset as string);
      const query = req.query.query || "";

      const data = await eventModel.getEvents(
        +itemId,
        +offset,
        +limit,
        query as string
      );
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }

  @isJsonEmpty
  @validator
  async createEvent(req: Request, res: Response): Promise<void> {
    try {
      const itemId = req.params.itemId;
      const event = sanitizeCreateEvent(req.body);
      const creatorId = req.userId;
      const data = await eventModel.createEvent(+creatorId, +itemId, event);
      res.status(201).json(data);
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }

  @isJsonEmpty
  @validator
  async updateEvent(req: Request, res: Response): Promise<void> {
    try {
      const eventId = req.params.eventId;
      const itemId = req.params.itemId;
      const event = sanitizeUpdateEvent(req.body);

      const data = await eventModel.updateEvent(+itemId, +eventId, event);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }
}

export default EventController;
