import { Router } from "express";
import {
  supplyChainItemController,
  eventController,
  custodianController,
  userController,
  authController,
} from "../controller";
import { checkSchema } from "express-validator";
import {
  PostEventSchema,
  PostItemSchema,
  PutEventSchema,
  PutItemSchema,
  validateParamId,
  PostLoginSchema,
  PostSignupSchema,
} from "../middleware/validators";
import { validateToken } from "../middleware/auth";

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
    validateToken,
    eventController.createEvent
  );
  router.put(
    "/:itemId/events/:eventId",
    validateParamId("itemId"),
    validateParamId("eventId"),
    checkSchema(PutEventSchema, ["body"]),
    validateToken,
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
    validateToken,
    supplyChainItemController.createItem
  );
  router.put(
    "/:itemId",
    validateParamId("itemId"),
    checkSchema(PutItemSchema, ["body"]),
    validateToken,
    supplyChainItemController.updateItem
  );
  router.delete(
    "/:itemId",
    validateParamId("itemId"),
    validateToken,
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

const authRouter = (): Router => {
  const router = Router();
  router.post(
    "/login",
    checkSchema(PostLoginSchema, ["body"]),
    authController.login
  );
  router.post(
    "/signup",
    checkSchema(PostSignupSchema, ["body"]),
    authController.signup
  );
  router.delete("/logout", authController.logout);
  return router;
};

const router = Router();

router.use("/items", itemsRouter());
router.use("/users", usersRouter());
router.use("/custodians", custodiansRouter());
router.use("/items", eventsRouter());
router.use("/auth", authRouter());

export default router;
