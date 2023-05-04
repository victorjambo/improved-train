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
}

export default SupplyChainItemController;
