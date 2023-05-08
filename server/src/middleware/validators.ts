import { NextFunction, Request, Response } from "express";
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
  title: {
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: "`title` is cannot be empty",
    },
  },
  price: {
    isEmpty: {
      negated: true,
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
  title: {
    optional: true,
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: "`title` is cannot be empty",
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
  title: {
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: "`title` is cannot be empty",
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
  title: {
    optional: true,
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: "`title` is cannot be empty",
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

export const PostLoginSchema: Schema = {
  email: {
    isEmail: {
      errorMessage: "invalid email",
    },
    isEmpty: {
      negated: true,
      errorMessage: "`email` is cannot be empty",
    },
  },
  password: {
    isStrongPassword: {
      errorMessage: "weak password",
      options: {
        minLength: 4,
      },
    },
  },
};

export const PostSignupSchema: Schema = {
  ...PostLoginSchema,
  title: {
    optional: true,
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: "`title` is cannot be empty",
    },
  },
};

export const validateQuery = () => {
  return function (req: Request, res: Response, next: NextFunction) {
    const limit = req.query.limit;
    const offset = req.query.offset;
    const query = req.query.query;

    const errors = [];
    let isValid = true;

    // Check that limit is a positive integer
    if (
      limit &&
      (!Number.isInteger(parseInt(limit as string)) ||
        parseInt(limit as string) <= 0)
    ) {
      isValid = false;
      errors.push("`Limit` must be a positive integer");
    }

    // Check that offset is a positive integer
    if (
      offset &&
      (!Number.isInteger(parseInt(offset as string)) ||
        parseInt(offset as string) <= 0)
    ) {
      isValid = false;
      errors.push("`Offset` must be a positive integer");
    }

    // Check that query is a string without bad characters
    const badCharacters = /[^\w\s]/g; // Define a regular expression to match any non-alphanumeric characters
    if (query && (query as string).match(badCharacters)) {
      isValid = false;
      errors.push("`Query` contains bad characters");
    }

    if (!isValid) {
      return res.status(400).json(errors);
    }

    next();
  };
};
