import React, { useCallback, useEffect } from "react";
import TableHeader from "./tableHeader";
import Item from "./item";
import { useAppContext } from "@/context/app";
import { http } from "@/utils";
import { useFetchAllItems } from "@/hooks/useFetch";
import Spinner from "../reusables/spinner";

const AllItems: React.FC = () => {
  const { items, fetchingAllItems } = useAppContext();
  const fetchItems = useFetchAllItems();

  useEffect(() => {
    void fetchItems();
  }, [fetchItems]);

  return (
    <div className="mt-7">
      <div
        className={`grid grid-flow-row ${
          items?.length ? "divide-y divide-slate-700" : ""
        }`}
      >
        {(items?.length && !fetchingAllItems) ? <TableHeader /> : null}

        {fetchingAllItems ? (
          <div className="flex w-full justify-center"><Spinner /></div>
        ) : items?.length ? (
          items.map((item) => <Item key={item.id} item={item} />)
        ) : (
          <div className="py-10 flex w-full justify-center">No Items found</div>
        )}
      </div>
    </div>
  );
};

export default AllItems;
