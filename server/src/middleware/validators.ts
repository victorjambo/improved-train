import { Schema, validationResult, param } from "express-validator";

/**
 * Decorator to validate requests before fn execution
 * https://www.typescriptlang.org/docs/handbook/decorators.html
 * @param target
 * @param propertyKey
 * @param descriptor
 */
export function validator(
  target: any,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<any>
) {
  let method = descriptor.value!;

  descriptor.value = function () {
    const req = arguments[0];
    const res = arguments[1];
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.status(400).send({ errors: result.array() });
      return;
    }

    return method.apply(this, arguments);
  };
}

export function isJsonEmpty(
  target: any,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<any>
) {
  let method = descriptor.value!;

  descriptor.value = function () {
    const req = arguments[0];
    const res = arguments[1];
    if (!Object.keys(req.body).length) {
      res.status(400).json({
        error: "Empty JSON Body",
      });
      return;
    }

    return method.apply(this, arguments);
  };
}

export const validateParamId = (id: string) => param(id).toInt().isInt();

export const PostItemSchema: Schema = {
  name: {
    optional: true,
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: "`name` is cannot be empty",
    },
    notEmpty: {
      errorMessage: "`name` is required field",
      bail: true,
    },
  },
  price: {
    notEmpty: {
      errorMessage: "`price` is required field",
      bail: true,
    },
    isInt: {
      errorMessage: "`price` should be positive integer",
      options: {
        min: 0,
      },
    },
  },
};

export const PutItemSchema: Schema = {
  name: {
    optional: true,
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: "`name` is cannot be empty",
    },
  },
  price: {
    optional: true,
    isInt: {
      errorMessage: "`price` should be positive integer",
      options: {
        min: 0,
      },
    },
  },
};

export const PostEventSchema: Schema = {
  name: {
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: "`name` is cannot be empty",
      bail: true,
    },
  },
  description: {
    trim: true,
    optional: true,
    isEmpty: {
      negated: true,
      errorMessage: "`description` is cannot be empty",
      bail: true,
    },
  },
  location: {
    trim: true,
    optional: true,
    isEmpty: {
      negated: true,
      errorMessage: "`location` is cannot be empty",
    },
  },
  creatorId: {
    isInt: {
      errorMessage: "`creatorId` should be positive integer",
      options: {
        min: 0,
      },
    },
  },
  custodianId: {
    isInt: {
      errorMessage: "`custodianId` should be positive integer",
      options: {
        min: 0,
      },
    },
  },
};

export const PutEventSchema: Schema = {
  name: {
    optional: true,
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: "`name` is cannot be empty",
    },
  },
  description: {
    trim: true,
    optional: true,
    isEmpty: {
      negated: true,
      errorMessage: "`description` is cannot be empty",
    },
  },
  location: {
    trim: true,
    optional: true,
    isEmpty: {
      negated: true,
      errorMessage: "`location` is cannot be empty",
    },
  },
  creatorId: {
    optional: true,
    isInt: {
      errorMessage: "`creatorId` should be positive integer",
      options: {
        min: 0,
      },
    },
  },
  custodianId: {
    optional: true,
    isInt: {
      errorMessage: "`custodianId` should be positive integer",
      options: {
        min: 0,
      },
    },
  },
};
