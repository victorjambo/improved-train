export const validateCreateItem = (
  title: string,
  price: number,
  quantity: number,
  description: string
) => {
  const errors = {
    title: "",
    price: "",
    quantity: "",
    description: "",
  };
  let isValid = true;

  // Check that limit is a positive integer
  if (!Number.isInteger(price) || price <= 0) {
    isValid = false;
    errors.price = "must be >1";
  }

  // Check that offset is a positive integer
  if (!Number.isInteger(quantity) || quantity <= 0) {
    isValid = false;
    errors.quantity = "must be >1";
  }

  const badCharacters = /[^\w\s]/g;
  if ((title as string).match(badCharacters)) {
    isValid = false;
    errors.title = "Invalid name";
  }

  if ((description as string).match(badCharacters)) {
    isValid = false;
    errors.description = "Invalid description";
  }

  return { isValid, errors };
};
