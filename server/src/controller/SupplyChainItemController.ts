import { Request, Response } from "express";
import { supplyChainItemModel } from "../models";

class SupplyChainItemController {
  async getItem(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const data = await supplyChainItemModel.getItemById(+id);
      res.status(200).json({
        status: "SUCCESS",
        message: "Get Item",
        data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  }

  async getItems(req: Request, res: Response): Promise<void> {
    try {
      const data = await supplyChainItemModel.getItems();
      res.status(200).json({
        status: "SUCCESS",
        message: "Get Items",
        data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  }

  async createItem(req: Request, res: Response): Promise<void> {
    try {
      const item = req.body;
      const data = await supplyChainItemModel.createItem(item);
      res.status(201).json({
        status: "SUCCESS",
        message: "Create Item",
        data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  }

  async updateItem(req: Request, res: Response): Promise<void> {
    try {
      const item = req.body;
      const id = req.params.id;
      const data = await supplyChainItemModel.updateItem(+id, item);
      res.status(200).json({
        status: "SUCCESS",
        message: "Update Item",
        data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  }

  async deleteItem(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const data = await supplyChainItemModel.deleteItem(+id);
      res.status(200).json({
        status: "SUCCESS",
        message: "Delete Item",
        data: {
          id: data.id
        }
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  }
}

export default SupplyChainItemController;
