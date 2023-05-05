import AuthController from "./AuthController";
import CustodianController from "./CustodianController";
import EventController from "./EventController";
import SupplyChainItemController from "./SupplyChainItemController";
import UserController from "./UserController";

export const supplyChainItemController = new SupplyChainItemController();
export const eventController = new EventController();
export const userController = new UserController();
export const custodianController = new CustodianController();
export const authController = new AuthController();
