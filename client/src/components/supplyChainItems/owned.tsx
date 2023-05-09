import React, { useEffect } from "react";
import TableHeader from "./tableHeader";
import Item from "./item";
import { useAppContext } from "@/context/app";
import { useFetchOwnedItems } from "@/hooks/useFetch";
import Spinner from "../reusables/spinner";

const OwnedItems: React.FC = () => {
  const { ownedItems, fetchingOwnedItem } = useAppContext();

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
        {ownedItems?.length && !fetchingOwnedItem ? <TableHeader /> : null}

        {fetchingOwnedItem ? (
          <div className="flex w-full justify-center">
            <Spinner />
          </div>
        ) : ownedItems?.length ? (
          ownedItems.map((item) => <Item key={item.id} item={item} />)
        ) : (
          <div className="py-10 flex w-full justify-center">No Items found</div>
        )}
      </div>
    </div>
  );
};

export default OwnedItems;
