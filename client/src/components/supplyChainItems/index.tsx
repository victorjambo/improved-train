import React, { useCallback, useEffect, useMemo } from "react";
import TableHeader from "./tableHeader";
import { items } from "@/utils/mockdata";
import Item from "./item";
import { ItemsTabs, useAppContext } from "@/context/app";
import { http } from "@/utils";
import AllItems from "./all";
import OwnedItems from "./owned";

const SupplyChainItems: React.FC = () => {
  const { currentTab } = useAppContext();



  return <div>{currentTab === ItemsTabs.All ? <AllItems /> : <OwnedItems />}</div>;
};

export default SupplyChainItems;
