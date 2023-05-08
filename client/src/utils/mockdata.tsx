import { SupplyChainItemResponse } from "@/types";

export const items: SupplyChainItemResponse[] = [
  {
    id: 1,
    title: "Old Park",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 5068,
    creatorId: 2,
    createdAt: "2023-05-08T02:23:40.253Z",
    updatedAt: "2023-05-08T02:23:40.253Z",
    quantity: 783591,
    status: "SHIPPING",
    creator: {
      email: "admin2@me.io",
      name: "admin2",
      id: 2,
    },
  },
  {
    id: 2,
    title: "Bored Memory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 2303,
    creatorId: 1,
    createdAt: "2023-05-08T02:23:40.253Z",
    updatedAt: "2023-05-08T02:23:40.253Z",
    quantity: 75441,
    status: "DELIVERED",
    creator: {
      email: "admin@me.io",
      name: "admin",
      id: 1,
    },
  },
  {
    id: 3,
    title: "Worried Bit",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 8222,
    creatorId: 2,
    createdAt: "2023-05-08T02:23:40.253Z",
    updatedAt: "2023-05-08T02:23:40.253Z",
    quantity: 91655,
    status: "PENDING",
    creator: {
      email: "admin2@me.io",
      name: "admin2",
      id: 2,
    },
  },
  {
    id: 4,
    title: "Strong Elephant",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 519,
    creatorId: 1,
    createdAt: "2023-05-08T02:23:40.253Z",
    updatedAt: "2023-05-08T02:23:40.253Z",
    quantity: 402348,
    status: "DELIVERED",
    creator: {
      email: "admin@me.io",
      name: "admin",
      id: 1,
    },
  },
  {
    id: 5,
    title: "Dazzling Morning",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 2548,
    creatorId: 2,
    createdAt: "2023-05-08T02:23:40.253Z",
    updatedAt: "2023-05-08T02:23:40.253Z",
    quantity: 994565,
    status: "PENDING",
    creator: {
      email: "admin2@me.io",
      name: "admin2",
      id: 2,
    },
  },
  {
    id: 6,
    title: "Alive Planet",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 2919,
    creatorId: 1,
    createdAt: "2023-05-08T02:23:40.253Z",
    updatedAt: "2023-05-08T02:23:40.253Z",
    quantity: 789672,
    status: "DELIVERED",
    creator: {
      email: "admin@me.io",
      name: "admin",
      id: 1,
    },
  },
  {
    id: 7,
    title: "Bad Apple",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 8990,
    creatorId: 2,
    createdAt: "2023-05-08T02:23:40.253Z",
    updatedAt: "2023-05-08T02:23:40.253Z",
    quantity: 566499,
    status: "PENDING",
    creator: {
      email: "admin2@me.io",
      name: "admin2",
      id: 2,
    },
  },
  {
    id: 8,
    title: "Whining Laptop",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 1347,
    creatorId: 1,
    createdAt: "2023-05-08T02:23:40.253Z",
    updatedAt: "2023-05-08T02:23:40.253Z",
    quantity: 495328,
    status: "DELIVERED",
    creator: {
      email: "admin@me.io",
      name: "admin",
      id: 1,
    },
  },
  {
    id: 9,
    title: "Hallowed Application",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 9227,
    creatorId: 2,
    createdAt: "2023-05-08T02:23:40.253Z",
    updatedAt: "2023-05-08T02:23:40.253Z",
    quantity: 16299,
    status: "PENDING",
    creator: {
      email: "admin2@me.io",
      name: "admin2",
      id: 2,
    },
  },
  {
    id: 10,
    title: "Ancient Art",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 4897,
    creatorId: 1,
    createdAt: "2023-05-08T02:23:40.253Z",
    updatedAt: "2023-05-08T02:23:40.253Z",
    quantity: 817048,
    status: "SHIPPING",
    creator: {
      email: "admin@me.io",
      name: "admin",
      id: 1,
    },
  },
];

export const defaultItem: SupplyChainItemResponse = {
  id: 0,
  title: "",
  description: "",
  price: 0,
  creatorId: 0,
  createdAt: "",
  updatedAt: "",
  quantity: 0,
  status: "PENDING",
  events: [
    {
      id: 0,
      title: "",
      description: "",
      location: "",
      creatorId: 0,
      custodianId: 0,
      supplyChainItemId: 0,
      createdAt: "",
      updatedAt: "",
      custodian: {
        id: 0,
        name: "",
      },
    },
  ],
};
