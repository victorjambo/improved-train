import { PrismaClient } from "@prisma/client";
import SupplyChainItemModel from "./SupplyChainItemModel";
import CustodianModel from "./CustodianModel";
import EventModel from "./EventModel";
import UserModel from "./UserModel";

const prisma = new PrismaClient();

export const supplyChainItemModel = new SupplyChainItemModel(prisma);
export const eventModel = new EventModel(prisma);
export const custodianModel = new CustodianModel(prisma);
export const userModel = new UserModel(prisma);
