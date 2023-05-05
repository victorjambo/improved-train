import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const ACCESS_TOKEN = process.env.ACCESS_TOKEN_SECRET || "";

export async function hashedPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export function generateTokens(id: number) {
  return jwt.sign({ userId: id }, ACCESS_TOKEN, {
    expiresIn: "9000000",
  });
}

interface Token {
  userId: string;
}

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["Authorization"] as string;
  if (!authHeader) return res.status(401).json({ message: "Unauthorized" });
  const token = authHeader.split(" ")[1];
  jwt.verify(token, ACCESS_TOKEN, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    const { userId } = decoded as Token;
    req.userId = userId;
    next();
  });
};
