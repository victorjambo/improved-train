import {
  CreateItemRequestBody,
  UpdateItemRequestBody,
  CreateEventReqBody,
  UpdateEventReqBody,
} from "../types";

export const sanitizeCreateItem = (
  item: CreateItemRequestBody
): CreateItemRequestBody => {
  return {
    creatorId: +item.creatorId,
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
  const { name, description, location, creatorId, custodianId } = event;

  return {
    name,
    creatorId,
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
