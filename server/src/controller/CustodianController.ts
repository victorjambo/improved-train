import { Request, Response } from "express";
import { custodianModel } from "../models";

class CustodianController {
  async getCustodians(req: Request, res: Response): Promise<void> {
    try {
      const data = await custodianModel.getCustodians();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }
}

export default CustodianController;
