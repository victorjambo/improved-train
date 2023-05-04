export interface ItemResponse {
  status: "SUCCESS";
  message: string;
  data: {
    id: string;
    user: {
      id: string;
      name: string;
    };
    price: number;
  };
}

export type CreateItemRequestBody = {
  name: string;
  description: string;
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
  description: string;
  location: string;
  creatorId: number;
  custodianId: number;
};

export type UpdateEventReqBody = {
  name?: string;
  description?: string;
  location?: string;
  custodianId?: number;
};
