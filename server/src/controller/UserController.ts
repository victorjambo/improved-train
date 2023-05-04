import { Request, Response } from "express";
import { userModel } from "../models";

class UserController {
  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const data = await userModel.getUserById(+id);
      res.status(200).json({
        status: "SUCCESS",
        message: "Get User",
        data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  }

  async createUser(req: Request, res: Response): Promise<void> {
    // TODO
    try {
      const data = await userModel.getUserById(1);
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

export default UserController;