import { Request, Response } from "express";
import { supplyChainItemModel } from "../models";
import { isJsonEmpty, validator } from "../middleware/validators";
import {
  sanitizeCreateItem,
  sanitizeUpdateItem,
} from "../middleware/sanitizer";

class SupplyChainItemController {
  @validator
  async getItem(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.itemId;
      const data = await supplyChainItemModel.getItemById(+id);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }

  async getItems(req: Request, res: Response): Promise<void> {
    try {
      const limit = parseInt(req.query.limit as string);
      const offset = parseInt(req.query.offset as string);
      const query = req.query.query || '';

      const data = await supplyChainItemModel.getItems(+offset, +limit, query as string);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }

  @isJsonEmpty
  @validator
  async createItem(req: Request, res: Response): Promise<void> {
    try {
      const item = sanitizeCreateItem(req.body);

      if (!item) {
        res.status(400).json({
          error: "Empty JSON Body",
        });
        return;
      }

      const creatorId = req.userId;
      const data = await supplyChainItemModel.createItem(creatorId, item);
      res.status(201).json(data);
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }

  @isJsonEmpty
  @validator
  async updateItem(req: Request, res: Response): Promise<void> {
    try {
      const item = sanitizeUpdateItem(req.body);
      const id = req.params.itemId;
      const data = await supplyChainItemModel.updateItem(+id, item);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }

  @validator
  async deleteItem(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.itemId;
      const data = await supplyChainItemModel.deleteItem(+id);
      res.status(200).json({
        id: data.id,
      });
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }
}

export default SupplyChainItemController;
