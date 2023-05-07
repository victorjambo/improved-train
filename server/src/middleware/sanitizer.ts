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
    name: item.name,
    price: +item.price,
    ...(item.description && { description: item.description }),
  };
};

export const sanitizeUpdateItem = (
  item: UpdateItemRequestBody
): UpdateItemRequestBody => {
  return {
    ...(item.name && { name: item.name }),
    ...(item.price && { price: +item.price }),
    ...(item.description && { description: item.description }),
  };
};

export const sanitizeCreateEvent = (
  event: CreateEventReqBody
): CreateEventReqBody => {
  const { name, description, location, custodianId } = event;

  return {
    name,
    custodianId,
    ...(location && { location }),
    ...(description && { description }),
  };
};

export const sanitizeUpdateEvent = (
  event: UpdateEventReqBody
): UpdateEventReqBody => {
  const { name, description, location, custodianId } = event;

  return {
    ...(custodianId && { custodianId }),
    ...(name && { name }),
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
