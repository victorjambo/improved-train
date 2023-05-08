import { useAppContext } from "@/context/app";
import { http } from "@/utils";
import { useCallback } from "react";

export const useFetchAllItems = () => {
  const { setItems } = useAppContext();

  const fetchItems = useCallback(async () => {
    await http
      .get("/items")
      .then((res) => res.data)
      .then((res) => setItems?.(res))
      .catch((err) => console.log(err));
  }, []);

  return fetchItems;
};

export const useFetchOwnedItems = () => {
  const { setOwnedItems } = useAppContext();

  const fetchItems = useCallback(async () => {
    await http
      .get("/users/items")
      .then((res) => res.data)
      .then((res) => setOwnedItems?.(res))
      .catch((err) => console.log(err));
  }, []);

  return fetchItems;
};
