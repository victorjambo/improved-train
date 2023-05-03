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
