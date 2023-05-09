import { useAppContext } from "@/context/app";
import { CustodianResponse } from "@/types";
import { http, logError } from "@/utils";
import { useCallback, useEffect, useState } from "react";

export const useFetchAllItems = () => {
  const { setItems, setFetchingAllItems } = useAppContext();

  const fetchItems = useCallback(async () => {
    setFetchingAllItems?.(true);
    await http
      .get("/items")
      .then((res) => res.data)
      .then((res) => {
        setItems?.(res);
        setFetchingAllItems?.(false);
      })
      .catch((err) => {
        logError(err);
        setFetchingAllItems?.(false);
      });
  }, []);

  return fetchItems;
};

export const useFetchOwnedItems = () => {
  const { setOwnedItems, setFetchingOwnedItem } = useAppContext();

  const fetchItems = useCallback(async () => {
    setFetchingOwnedItem?.(true);
    await http
      .get("/users/items")
      .then((res) => res.data)
      .then((res) => {
        setOwnedItems?.(res);
        setFetchingOwnedItem?.(false);
      })
      .catch((err) => {
        logError(err);
        setFetchingOwnedItem?.(false);
      });
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
      .catch((err) => logError(err));
  }, []);

  useEffect(() => {
    void fetchCustodians();
  }, [fetchCustodians]);

  return custodians;
};

export const useFetchItem = (id: number | undefined) => {
  const { setSelectedItem, setFetchingItem } = useAppContext();

  const fetchItem = useCallback(async () => {
    if (!id) return;
    setFetchingItem?.(true);

    await http
      .get(`/items/${id}`)
      .then((res) => res.data)
      .then((res) => {
        setSelectedItem?.(res);
        setFetchingItem?.(false);
      })
      .catch((err) => {
        logError(err);
        setFetchingItem?.(false);
      });
  }, [id]);

  return fetchItem;
};
