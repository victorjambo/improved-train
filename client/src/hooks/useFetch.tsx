import { useAppContext } from "@/context/app";
import { CustodianResponse } from "@/types";
import { http } from "@/utils";
import { useCallback, useEffect, useState } from "react";

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

export const useFetchCustodians = () => {
  const [custodians, setCustodians] = useState<CustodianResponse[]>([]);

  const fetchCustodians = useCallback(async () => {
    await http
      .get("/custodians")
      .then((res) => res.data)
      .then((res) => setCustodians(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    void fetchCustodians();
  }, [fetchCustodians]);

  return custodians;
};

export const useFetchItem = (id: number | undefined) => {
  const { setSelectedItem } = useAppContext();

  const fetchItem = useCallback(async () => {
    if (!id) return;

    await http
      .get(`/items/${id}`)
      .then((res) => res.data)
      .then((res) => setSelectedItem?.(res))
      .catch((err) => console.log(err));
  }, [id]);

  return fetchItem;
};
