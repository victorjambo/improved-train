import React, { useCallback, useEffect } from "react";
import TableHeader from "./tableHeader";
import Item from "./item";
import { useAppContext } from "@/context/app";
import { http } from "@/utils";
import { useFetchOwnedItems } from "@/hooks/useFetch";

const OwnedItems: React.FC = () => {
  const { ownedItems } = useAppContext();

  const fetchItems = useFetchOwnedItems();

  useEffect(() => {
    void fetchItems();
  }, [fetchItems]);

  return (
    <div className="mt-7">
      <div
        className={`grid grid-flow-row ${
          ownedItems?.length ? "divide-y divide-slate-700" : ""
        }`}
      >
        {ownedItems?.length ? <TableHeader /> : null}

        {ownedItems?.length ? (
          ownedItems.map((item) => <Item key={item.id} item={item} />)
        ) : (
          <div>No Items found</div>
        )}
      </div>
    </div>
  );
};

export default OwnedItems;
