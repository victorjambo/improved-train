import { Router } from "express";
import { itemController, eventController } from "../controller";

// Controllers
const itemsRouter = async (): Promise<Router> => {
  const router = Router();
  router.get("/", itemController.getItems);
  router.get("/:id", itemController.getItem);
  return router;
};

const eventsRouter = async (): Promise<Router> => {
  const router = Router();
  router.get("/", eventController.getEvent);
  return router;
};

export const setupRouter = async (): Promise<Router> => {
  const router = Router();

  router.use("/items", await itemsRouter());
  router.use("/events", await eventsRouter());

  return router;
};
