import { Request, Response } from "express";
import { itemModel } from "../models";

export interface ItemControllerInterface {
  getItem(req: Request, res: Response): Promise<void>;
}

class ItemController implements ItemControllerInterface {
  async getItem(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      res.status(200).json({
        status: "SUCCESS",
        message: "Get Item",
        data: {
          id: id,
          user: {
            id: "1234",
            name: "victor",
          },
          price: 99999,
        },
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
      const items = itemModel.getItems()
      res.status(200).json({
        status: "SUCCESS",
        message: "Get Item",
        data: items,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  }
}

export default ItemController;
