import React, { useCallback, useEffect } from "react";
import TableHeader from "./tableHeader";
import Item from "./item";
import { useAppContext } from "@/context/app";
import { http } from "@/utils";
import { useFetchAllItems } from "@/hooks/useFetch";

const AllItems: React.FC = () => {
  const { items } = useAppContext();
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
        {items?.length ? <TableHeader /> : null}

        {items?.length ? (
          items.map((item) => <Item key={item.id} item={item} />)
        ) : (
          <div className="py-10 flex w-full justify-center">No Items found</div>
        )}
      </div>
    </div>
  );
};

export default AllItems;
