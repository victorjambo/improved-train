export interface ItemResponse {
  id: string;
  user: {
    id: string;
    name: string;
  };
  price: number;
}

export type CreateItemRequestBody = {
  name: string;
  description?: string;
  price: number;
  creatorId: number;
};

export type UpdateItemRequestBody = {
  name?: string;
  description?: string;
  price?: number;
};

export type CreateEventReqBody = {
  name: string;
  description?: string;
  location?: string;
  creatorId: number;
  custodianId: number;
};

export type UpdateEventReqBody = {
  name?: string;
  description?: string;
  location?: string;
  custodianId?: number;
};

export type LoginReqBody = {
  email: string;
  password: string;
};

export type SignupReqBody = {
  name?: string;
  email: string;
  password: string;
};
