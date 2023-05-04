import { Router } from "express";
import {
  supplyChainItemController,
  eventController,
  custodianController,
  userController,
} from "../controller";

const eventsRouter = (): Router => {
  const router = Router();
  router.get("/:itemId/events/:eventId", eventController.getEvent);
  router.get("/:itemId/events", eventController.getEvents);
  router.post("/:itemId/events", eventController.createEvent);
  router.put("/:itemId/events/:eventId", eventController.updateEvent);
  return router;
};

const itemsRouter = (): Router => {
  const router = Router();
  router.get("/", supplyChainItemController.getItems);
  router.get("/:id", supplyChainItemController.getItem);
  router.post("/", supplyChainItemController.createItem);
  router.put("/:id", supplyChainItemController.updateItem);
  router.delete("/:id", supplyChainItemController.deleteItem);
  return router;
};

const usersRouter = (): Router => {
  const router = Router();
  router.get("/:id", userController.getUser);
  return router;
};

const custodiansRouter = (): Router => {
  const router = Router();
  router.get("/", custodianController.getCustodians);
  return router;
};

const router = Router();

router.use("/items", itemsRouter());
router.use("/users", usersRouter());
router.use("/custodians", custodiansRouter());
router.use("/items", eventsRouter());

export default router;
