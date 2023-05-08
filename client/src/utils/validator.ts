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

  return { isValid, errors };
};

export const validateCreateEvent = (
  title: string,
  location: string,
  description: string
) => {
  const errors = {
    title: "",
    location: "",
    description: "",
  };
  let isValid = true;

  const badCharacters = /[^\w\s]/g;
  if ((title as string).match(badCharacters)) {
    isValid = false;
    errors.title = "Invalid name";
  }

  if ((location as string).match(badCharacters)) {
    isValid = false;
    errors.location = "Invalid location";
  }

  return { isValid, errors };
};

export const validateAuth = (
  email: string,
  name: string,
  password: string,
  confirmPassword: string
) => {
  const errors = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  };

  let isValid = true;

  const nameRegex = /^[a-zA-Z0-9_]{4,}$/; // Matches alphanumeric characters and underscore, with minimum length 4
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; // Matches email address format
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,20}$/; // Matches strong password: 6-20 characters with at least one uppercase, one lowercase, one digit, and one special character

  if (!nameRegex.test(name)) {
    errors.name = "must contain at least 4 characters";
    isValid = false;
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
    isValid = false;
  }

  if (!emailRegex.test(email)) {
    errors.email = "Email address is not valid";
    isValid = false;
  }

  if (!passwordRegex.test(password)) {
    errors.password =
      "Password must be at least 6 characters and include at least one uppercase letter, one lowercase letter, one digit, and one special character";
    isValid = false;
  }

  return { isValid, errors };
};
