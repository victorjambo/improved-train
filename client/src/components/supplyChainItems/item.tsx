import { SupplyChainItemResponse } from "@/types";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useCallback } from "react";
import Label from "../reusables/label";
import { useAppContext } from "@/context/app";
import { http } from "@/utils";

const Item: React.FC<{ item: SupplyChainItemResponse }> = ({ item }) => {
  const { title, price, quantity, status, id } = item;

  const { setShowSidePanel, setSelectedItem } = useAppContext();

  const fetchItem = useCallback(async () => {
    await http
      .get(`/items/${id}`)
      .then((res) => res.data)
      .then((res) => setSelectedItem?.(res))
      .catch((err) => console.log(err));
  }, []);

  const openSidepanel = () => {
    setShowSidePanel?.(true);
    void fetchItem();
  };

  return (
    <div
      className="grid grid-flow-col grid-cols-5 w-full auto-cols-max hover:bg-[#262833] cursor-pointer items-center"
      onClick={openSidepanel}
    >
      <div className="p-4 col-span-2 flex items-center">
        <div className="flex flex-col">
          <span>{title}</span>
        </div>
      </div>
      <div className="p-4 self-start">${price}</div>
      <div className="p-4 flex flex-col">
        <span>{quantity}</span>
      </div>
      <div className="p-4 flex flex-col">
        <Label status={status} />
      </div>
      <div className="p-4">
        <ChevronRightIcon className="h-5 w-5 text-slate-400" />
      </div>
    </div>
  );
};

export default Item;
