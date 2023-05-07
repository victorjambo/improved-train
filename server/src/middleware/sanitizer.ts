import {
  CreateItemRequestBody,
  UpdateItemRequestBody,
  CreateEventReqBody,
  UpdateEventReqBody,
  LoginReqBody,
  SignupReqBody,
} from "../types";

export const sanitizeCreateItem = (
  item: CreateItemRequestBody
): CreateItemRequestBody => {
  return {
    title: item.title,
    price: +item.price,
    quantity: +item.quantity,
    ...(item.description && { description: item.description }),
  };
};

export const sanitizeUpdateItem = (
  item: UpdateItemRequestBody
): UpdateItemRequestBody => {
  return {
    ...(item.title && { title: item.title }),
    ...(item.quantity && { quantity: item.quantity }),
    ...(item.price && { price: +item.price }),
    ...(item.description && { description: item.description }),
  };
};

export const sanitizeCreateEvent = (
  event: CreateEventReqBody
): CreateEventReqBody => {
  const { title, description, location, custodianId } = event;

  return {
    title,
    custodianId,
    ...(location && { location }),
    ...(description && { description }),
  };
};

export const sanitizeUpdateEvent = (
  event: UpdateEventReqBody
): UpdateEventReqBody => {
  const { title, description, location, custodianId, status } = event;

  return {
    ...(custodianId && { custodianId }),
    ...(status && { status }),
    ...(title && { title }),
    ...(location && { location }),
    ...(description && { description }),
  };
};

// TODO
export const sanitizeLogin = (auth: LoginReqBody): LoginReqBody => {
  return auth;
};

export const sanitizeSignup = (auth: SignupReqBody): SignupReqBody => {
  return auth;
};
