export interface ItemResponse {
  id: string;
  user: {
    id: string;
    name: string;
  };
  price: number;
}

export type CreateItemRequestBody = {
  title: string;
  description?: string;
  price: number;
  quantity: number;
  status?: "PENDING" | "SHIPPING" | "DELIVERED";
};

export type UpdateItemRequestBody = {
  title?: string;
  description?: string;
  price?: number;
  quantity?: number;
  status?: "PENDING" | "SHIPPING" | "DELIVERED";
};

export type CreateEventReqBody = {
  title: string;
  description?: string;
  location?: string;
  custodianId: number;
};

export type UpdateEventReqBody = {
  title?: string;
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
