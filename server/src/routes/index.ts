import { Router } from "express";
import { itemController, eventController } from "../controller";

// Controllers
const itemsRouter = (): Router => {
  const router = Router();
  router.get("/", itemController.getItems);
  router.get("/:id", itemController.getItem);
  return router;
};

const eventsRouter = (): Router => {
  const router = Router();
  router.get("/", eventController.getEvent);
  return router;
};

const router = Router();

router.use("/items", itemsRouter());
router.use("/events", eventsRouter());

export default router;
