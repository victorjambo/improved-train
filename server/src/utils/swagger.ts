import { JsonObject } from "swagger-ui-express";

export const swagger: JsonObject = {
  openapi: "3.0.3",
  info: {
    title: "Supply Chain",
    version: "1.0.0",
    description:
      "System that allows users to track and trace supply chain items.",
  },
  produces: ["application/json"],
  servers: [
    {
      url: "http://localhost:4000/api",
    },
  ],
  tags: [
    {
      name: "items",
    },
    {
      name: "events",
    },
    {
      name: "auth",
    },
    {
      name: "custodians",
    },
  ],
  paths: {
    "/items": {
      get: {
        operationId: "getItems",
        tags: ["items"],
        summary: "Get All Items",
        description: "Get All Items",
        parameters: [
          {
            name: "limit",
            in: "query",
            description: "number of items per page",
            required: false,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
          {
            name: "offset",
            in: "query",
            description: "skip number",
            required: false,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
          {
            name: "query",
            in: "query",
            description: "search term",
            required: false,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          "200": {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Item",
                  },
                },
              },
            },
          },
        },
      },
      post: {
        operationId: "createItem",
        tags: ["items"],
        summary: "Create an item",
        description: "Create an item",
        requestBody: {
          description: "Create a new event in the store",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Item",
              },
            },
          },
          required: true,
        },
        responses: {
          "201": {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Item",
                },
              },
            },
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
      },
    },
    "/items/{itemId}": {
      get: {
        operationId: "getItem",
        tags: ["items"],
        summary: "Get Item by id",
        description: "Get Item by id",
        parameters: [
          {
            name: "itemId",
            in: "path",
            description: "ID of item to return",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          "200": {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Item",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["items"],
        summary: "Update an existing item",
        description: "Update an existing item by Id",
        operationId: "updateItem",
        parameters: [
          {
            name: "itemId",
            in: "path",
            description: "ID of item to update",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        requestBody: {
          description: "Update an existent items in the supply chain",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Item",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Item",
                },
              },
            },
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
      },
      delete: {
        tags: ["items"],
        summary: "Deletes an Item",
        description: "delete an Item",
        operationId: "deleteItem",
        parameters: [
          {
            name: "itemId",
            in: "path",
            description: "ID of item to update",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          "200": {
            description: "success",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
      },
    },
    "/items/{itemId}/events": {
      get: {
        operationId: "getItemEvents",
        tags: ["events"],
        summary: "Get Events by item id",
        description: "Get Events by item id",
        parameters: [
          {
            name: "itemId",
            in: "path",
            description: "ID of item to return",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          "200": {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Event",
                },
              },
            },
          },
        },
      },
      post: {
        operationId: "createEvent",
        tags: ["events"],
        summary: "Create an event",
        description: "Create an event",
        parameters: [
          {
            name: "itemId",
            in: "path",
            description: "ID of item to return",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        requestBody: {
          description: "Create a new event in the store",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Event",
              },
            },
          },
          required: true,
        },
        responses: {
          "201": {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Item",
                },
              },
            },
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
      },
    },
    "/items/{itemId}/events/{eventId}": {
      get: {
        operationId: "getItemEvent",
        tags: ["events"],
        summary: "Get Event by id",
        description: "Get Event by id",
        parameters: [
          {
            name: "itemId",
            in: "path",
            description: "ID of item to return",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
          {
            name: "eventId",
            in: "path",
            description: "ID of event to return",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          "200": {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Event",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["events"],
        summary: "Update an existing event",
        description: "Update an existing item by Id",
        operationId: "updateEvent",
        parameters: [
          {
            name: "itemId",
            in: "path",
            description: "ID of item to update",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
          {
            name: "eventId",
            in: "path",
            description: "ID of event to return",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        requestBody: {
          description: "Update an existent event",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Event",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Event",
                },
              },
            },
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
      },
    },
    "/users/items": {
      get: {
        operationId: "getUserItems",
        tags: ["items"],
        summary: "Get Current User Items",
        description: "Get Current User Items",
        responses: {
          "200": {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Item",
                  },
                },
              },
            },
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
      },
    },
    "/custodians": {
      get: {
        operationId: "getCustodians",
        tags: ["custodians"],
        summary: "Get Custodians",
        description: "Get Custodians",
        responses: {
          "200": {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Custodian",
                  },
                },
              },
            },
          },
        },
      },
    },
    "/auth/login": {
      post: {
        operationId: "login",
        tags: ["auth"],
        summary: "Login user",
        description: "Login user",
        requestBody: {
          description: "Login user",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/LoginReq",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AuthRes",
                },
              },
            },
          },
        },
      },
    },
    "/auth/signup": {
      post: {
        operationId: "signup",
        tags: ["auth"],
        summary: "Signup user",
        description: "Signup user",
        requestBody: {
          description: "Signup user",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SignupReq",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AuthRes",
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Item: {
        type: "object",
        properties: {
          price: {
            type: "integer",
            format: "int64",
            example: 198772,
          },
          quantity: {
            type: "integer",
            format: "int32",
            example: 7,
          },
          title: {
            type: "string",
            example: "Clumsy Carpenter",
          },
          description: {
            type: "string",
            example: "Lorem Ipsum is simply dummy",
          },
        },
        xml: {
          name: "items",
        },
      },
      Event: {
        type: "object",
        properties: {
          custodianId: {
            type: "integer",
            format: "int64",
            example: 7,
          },
          location: {
            type: "string",
            example: "Nairobi",
          },
          title: {
            type: "string",
            example: "Clumsy Carpenter",
          },
          description: {
            type: "string",
            example: "Lorem Ipsum is simply dummy",
          },
        },
        xml: {
          name: "events",
        },
      },
      Custodian: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
            example: 7,
          },
          name: {
            type: "string",
            example: "Clumsy",
          },
          createdAt: {
            type: "string",
            example: "2023-05-08T02:14:17.083Z",
          },
          updatedAt: {
            type: "string",
            example: "2023-05-08T02:14:17.083Z",
          },
        },
        xml: {
          name: "custodians",
        },
      },
      LoginReq: {
        type: "object",
        properties: {
          email: {
            type: "string",
            example: "admin@me.io",
          },
          password: {
            type: "string",
            example: "Pass@123",
          },
        },
        xml: {
          name: "LoginReq",
        },
      },
      AuthRes: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
            example: 1,
          },
          email: {
            type: "string",
            example: "admin@me.io",
          },
          password: {
            type: "string",
            example: "Pass@123",
          },
          accessToken: {
            type: "string",
            example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
          },
        },
        xml: {
          name: "LoginRes",
        },
      },
      SignupReq: {
        type: "object",
        properties: {
          name: {
            type: "string",
            example: "admin",
          },
          email: {
            type: "string",
            example: "admin@me.io",
          },
          password: {
            type: "string",
            example: "Pass@123",
          },
        },
        xml: {
          name: "SignupReq",
        },
      },
    },
    securitySchemes: {
      Bearer: {
        type: "http",
        name: "Authorization",
        scheme: "bearer",
        in: "header",
        bearerFormat: "JWT",
      },
    },
  },
};
