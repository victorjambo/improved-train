import { SupplyChainItemResponse } from "@/types";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import Label from "../reusables/label";
import { useAppContext } from "@/context/app";

const Item: React.FC<{ item: SupplyChainItemResponse }> = ({ item }) => {
  const { name, price } = item;
  const quantity = "1000"; // TODO

  const { setShowSidePanel } = useAppContext();
  return (
    <div
      className="grid grid-flow-col grid-cols-5 w-full auto-cols-max hover:bg-[#262833] cursor-pointer items-center"
      onClick={() => setShowSidePanel?.(true)}
    >
      <div className="p-4 col-span-2 flex items-center">
        <div className="flex flex-col">
          <span>{name}</span>
        </div>
      </div>
      <div className="p-4 self-start">${price}</div>
      <div className="p-4 flex flex-col">
        <span>{quantity}</span>
      </div>
      <div className="p-4 flex flex-col">
        <Label status={0} />
      </div>
      <div className="p-4">
        <ChevronRightIcon className="h-5 w-5 text-slate-400" />
      </div>
    </div>
  );
};

export default Item;
