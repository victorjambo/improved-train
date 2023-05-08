export type SupplyChainItemResponse = {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
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
  title: string;
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
