import React, { useMemo } from "react";
import TableHeader from "./tableHeader";
import { items } from "@/utils/mockdata";
import Item from "./item";
import { ItemsTabs, useAppContext } from "@/context/app";

const SupplyChainItems: React.FC = () => {
  const { currentTab } = useAppContext();

  const filteredItems = useMemo(() => {
    switch (currentTab) {
      case ItemsTabs.All:
        return items;
      case ItemsTabs.Mine:
        return items.filter((item) => !item.price); // TODO filter is item.isOwner
      default:
        return [];
    }
  }, [currentTab]);

  return (
    <div className="mt-7">
      <div
        className={`grid grid-flow-row ${
          filteredItems.length ? "divide-y divide-slate-700" : ""
        }`}
      >
        <TableHeader />

        {filteredItems?.length ? (
          filteredItems.map((item) => <Item key={item.id} item={item} />)
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default SupplyChainItems;
