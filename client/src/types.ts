export type SupplyChainItemResponse = {
  id: number;
  name: string;
  description: string;
  price: number;
  creatorId: number;
  creator: {
    id: number;
    email: string;
    name: string;
  };
};

export type NewSupplyChainItemResponse = {
  id: number;
  name: string;
  description: string;
  price: number;
  creatorId: number;
  createdAt: string;
  updatedAt: string;
  creator: {
    id: number;
    email: string;
    name: string;
  };
};

export type DeleteSupplyChainItemResponse = {
  id: number;
};

export type EventResponse = {
  id: number;
  name: string;
  description: string;
  location: string;
  creatorId: number;
  custodianId: number;
  supplyChainItemId: number;
  createdAt: string;
  updatedAt: string;
  custodian: {
    id: number;
    name: string;
  };
  creator: {
    email: string;
    name: string;
    id: number;
  };
};
