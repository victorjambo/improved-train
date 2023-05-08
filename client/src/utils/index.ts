import axios from "axios";

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const url = process.env.NEXT_PUBLIC_BACKEND_API;

export const http = axios.create({
  baseURL: `${url}api/`,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    ...(typeof window !== "undefined" && {
      Authorization: `Bearer ${localStorage
        ?.getItem("token")
        ?.replaceAll('"', "")}`,
    }),
  },
});

export const addCommas = (num: number) => {
  // Convert number to string
  const numberString = num.toString();

  // Split the string into an array of characters
  const characters = numberString.split("");

  // Reverse the array of characters so we can add commas from right to left
  characters.reverse();

  // Initialize an empty array to hold the new characters
  const newCharacters = [];

  // Loop through the characters, adding commas every three characters
  for (let i = 0; i < characters.length; i++) {
    // Add a comma every three characters, except for the first character
    if (i % 3 === 0 && i !== 0) {
      newCharacters.push(",");
    }

    // Add the current character to the new array
    newCharacters.push(characters[i]);
  }

  // Reverse the array again and join the characters into a string
  const numberWithCommas = newCharacters.reverse().join("");

  // Return the string with commas
  return numberWithCommas;
};
