import { Request, Response } from "express";

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
      res.status(200).json({
        status: "SUCCESS",
        message: "Get Item",
        data: [
          {
            id: "1234",
            user: {
              id: "1234",
              name: "victor",
            },
            price: 99999,
          },
          {
            id: "2234",
            user: {
              id: "1234",
              name: "victor",
            },
            price: 199999,
          },
          {
            id: "3234",
            user: {
              id: "1234",
              name: "victor",
            },
            price: 929999,
          },
        ],
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
