import { PrismaClient } from "@prisma/client";
import ItemModel from "./ItemModel";

const prisma = new PrismaClient();

export const itemModel = new ItemModel(prisma);
