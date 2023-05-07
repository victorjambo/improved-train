import { Request, Response } from "express";
import { authModel, custodianModel } from "../models";
import { sanitizeLogin, sanitizeSignup } from "../middleware/sanitizer";
import { isJsonEmpty, validator } from "../middleware/validators";
import { generateTokens } from "../middleware/auth";

class AuthController {
  @isJsonEmpty
  @validator
  async signup(req: Request, res: Response): Promise<void> {
    try {
      const body = sanitizeSignup(req.body);
      const data = await authModel.signup(body);
      const accessToken = generateTokens(data.id);
      res
        .cookie("token", accessToken, {
          httpOnly: true,
          sameSite: "none",
          secure: true,
          maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        .status(201)
        .json({
          ...data,
          accessToken,
        });
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }

  @isJsonEmpty
  @validator
  async login(req: Request, res: Response): Promise<void> {
    try {
      const body = sanitizeLogin(req.body);
      const data: any = await authModel.login(body);

      if (data.error) {
        res.status(data.code).json({ error: data.error });
        return;
      }

      const accessToken = generateTokens(data.id);

      res
        .cookie("token", accessToken, {
          httpOnly: true,
          sameSite: "none",
          secure: true,
          maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        .status(200)
        .json({
          ...data,
          accessToken,
        });
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }
  // TODO: Not working
  async logout(req: Request, res: Response): Promise<void> {
    try {
      const cookies = req.cookies;
      if (!cookies?.token) {
        res.sendStatus(204);
        return;
      }
      res.clearCookie("token", {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      res.sendStatus(200);
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }
}

export default AuthController;
