export const swagger = {
  swagger: "2.0",
  info: {
    title: "Supply Chain",
    version: "0.1.0",
    description:
      "System that allows users to track and trace supply chain items.",
    license: {
      name: "MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "Victor Mutai",
      url: "https://mutai.dev",
      email: "victormutaijambo@gmail.com",
    },
  },
  produces: ["application/json"],
  paths: {
    "/api/items": {
      get: {
        "x-swagger-router-controller": "bar",
        operationId: "impossible",
        tags: ["/items"],
        description: "",
        parameters: [],
        responses: {},
      },
      post: {
        "x-swagger-router-controller": "home",
        operationId: "index",
        tags: ["/items"],
        description: "[Login 123](https://www.google.com)",
        parameters: [
          {
            name: "test",
            in: "formData",
            type: "array",
            collectionFormat: "multi",
            items: {
              type: "integer",
            },
          },
          { name: "profileId", in: "formData", required: true, type: "string" },
          { name: "file", in: "formData", type: "file", required: "true" },
        ],
        responses: {},
      },
    },
    "/api/events": {
      get: {
        "x-swagger-router-controller": "bar",
        operationId: "impossible",
        tags: ["/events"],
        description: "",
        parameters: [],
        responses: {},
      },
    },
  },
  securityDefinitions: {
    api_key: {
      type: "apiKey",
      name: "api_key",
      in: "header",
    },
  },
};
