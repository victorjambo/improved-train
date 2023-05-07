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
