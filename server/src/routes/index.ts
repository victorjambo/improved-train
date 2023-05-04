import { Router } from "express";
import {
  supplyChainItemController,
  eventController,
  custodianController,
  userController,
} from "../controller";
import { checkSchema } from "express-validator";
import {
  PostEventSchema,
  PostItemSchema,
  PutEventSchema,
  PutItemSchema,
  validateParamId,
} from "../middleware/validators";

const eventsRouter = (): Router => {
  const router = Router();
  router.get(
    "/:itemId/events/:eventId",
    validateParamId("itemId"),
    validateParamId("eventId"),
    eventController.getEvent
  );
  router.get(
    "/:itemId/events",
    validateParamId("itemId"),
    eventController.getEvents
  );
  router.post(
    "/:itemId/events",
    validateParamId("itemId"),
    checkSchema(PostEventSchema, ["body"]),
    eventController.createEvent
  );
  router.put(
    "/:itemId/events/:eventId",
    validateParamId("itemId"),
    validateParamId("eventId"),
    checkSchema(PutEventSchema, ["body"]),
    eventController.updateEvent
  );
  return router;
};

const itemsRouter = (): Router => {
  const router = Router();
  router.get("/", supplyChainItemController.getItems);
  router.get(
    "/:itemId",
    validateParamId("itemId"),
    supplyChainItemController.getItem
  );
  router.post(
    "/",
    checkSchema(PostItemSchema, ["body"]),
    supplyChainItemController.createItem
  );
  router.put(
    "/:itemId",
    validateParamId("itemId"),
    checkSchema(PutItemSchema, ["body"]),
    supplyChainItemController.updateItem
  );
  router.delete(
    "/:itemId",
    validateParamId("itemId"),
    supplyChainItemController.deleteItem
  );
  return router;
};

const usersRouter = (): Router => {
  const router = Router();
  router.get("/:userId", validateParamId("userId"), userController.getUser);
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
