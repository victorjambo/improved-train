import { Router } from "express";
import {
  supplyChainItemController,
  eventController,
  custodianController,
  userController,
} from "../controller";

const itemsRouter = (): Router => {
  const router = Router();
  router.get("/", supplyChainItemController.getItems);
  router.get("/:id", supplyChainItemController.getItem);
  return router;
};

const eventsRouter = (): Router => {
  const router = Router();
  router.get("/:id", eventController.getEvent);
  router.get("/", eventController.getEvents);
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
router.use("/events", eventsRouter());
router.use("/users", usersRouter());
router.use("/custodians", custodiansRouter());

export default router;
