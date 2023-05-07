import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import React from "react";
import TabSwitcher from "../reusables/tabSwitcher";
import SupplyChainItems from "../supplyChainItems";
import { items } from "@/utils/mockdata";
import SidePanel from "../sidepanel";
import { useAppContext } from "@/context/app";

const Dashboard: React.FC = () => {
  const { showSidePanel, setShowCreateItemModal } = useAppContext();

  return (
    <div>
      <div className="flex justify-between md:mb-10 my-6 md:my-0">
        <div className="">
          <div className="text-md text-slate-500 dark:text-slate-400">
            Total Items
          </div>

          <div className="flex items-end text-2xl md:text-4xl font-semibold mt-2 text-slate-100">
            {items.length}
          </div>
        </div>

        <button
          className="h-fit self-end bg-[#4f87f6] px-2 py-1 rounded-md"
          onClick={() => setShowCreateItemModal?.(true)}
        >
          Add Item
        </button>
      </div>

      <div className="flex flex-row space-x-8">
        <div
          className={`rounded-2xl py-5 px-4 sm:px-6 bg-[#1e1f25] h-fit transition-all ease-linear ${
            showSidePanel ? "w-3/5" : "w-full"
          }`}
        >
          <div className="flex justify-between">
            <div className="font-semibold text-xl">Supply Chain Items</div>

            <div className="flex items-center font-medium space-x-3">
              <TabSwitcher />
            </div>
          </div>

          <SupplyChainItems />
        </div>

        <div
          className={`rounded-2xl py-5 px-4 sm:px-6 bg-[#1e1f25] h-fit transition-all ease-in-out duration-100 ${
            showSidePanel ? "w-2/5" : "w-0 hidden"
          }`}
        >
          <SidePanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
