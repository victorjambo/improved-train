import { PrismaClient } from "@prisma/client";
import BaseModel from "./BaseModel";
import { SignupReqBody, LoginReqBody } from "../types";
import bcrypt from "bcrypt";
import { exclude } from "../utils/exclude";
import { hashedPassword } from "../middleware/auth";


class AuthModel extends BaseModel {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async signup(user: SignupReqBody) {
    const password = await hashedPassword(user.password);

    const newUser = await this.prisma.user.create({
      data: {
        ...user,
        password,
      },
    });

    return exclude(newUser, ["password", "createdAt", "updatedAt"]);
  }

  async login(user: LoginReqBody) {
    const foundUser = await this.prisma.user.findFirst({ where: { email: user.email } });

    if (!foundUser) {
      return {
        error: "Email not found",
        code: 404,
      }
    }

    const isMatching = await bcrypt.compare(user.password, foundUser.password);
    if (!isMatching) {
      return {
        error: "Incorrect password",
        code: 400,
      }
    }

    return exclude(foundUser, ["password", "createdAt", "updatedAt"]);
    
  }
}

export default AuthModel;
