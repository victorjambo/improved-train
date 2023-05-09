import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import Label from "../reusables/label";
import { useAppContext } from "@/context/app";
import Events from "../events";
import EventActions from "./eventActions";
import { useAuthContext } from "@/context/auth";
import { defaultItem } from "@/utils/mockdata";

const SidePanel: React.FC = () => {
  const {
    setShowSidePanel,
    setShowCreateEventModal,
    selectedItem,
    setSelectedItem,
    fetchingItem,
  } = useAppContext();
  const { user } = useAuthContext();

  const closePanel = () => {
    setShowSidePanel?.(false);
    setSelectedItem?.(defaultItem);
  };

  return (
    <div>
      <div className="flex justify-between pb-8">
        <button
          className="p-2 hover:bg-[#262833] rounded-full"
          onClick={closePanel}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        {selectedItem?.creatorId === user?.id && <EventActions />}
      </div>
      <div>
        <div className="font-semibold text-xl">
          {fetchingItem ? (
            <div className="mb-2">
              <SkeletonLoader width="28" />
            </div>
          ) : (
            selectedItem?.title
          )}
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          {fetchingItem ? (
            <SkeletonLoader width="full" height="4" />
          ) : (
            selectedItem?.description
          )}
        </div>
      </div>

      <div className="flex flex-row justify-between border border-[#3e3f4b] rounded-md px-4 py-2 my-4">
        <div>
          <div className="text-xs text-slate-500">Price</div>
          <div className="text-md">
            $
            {fetchingItem ? <SkeletonLoader height="4" /> : selectedItem?.price}
          </div>
        </div>

        <div>
          <div className="text-xs text-slate-500">Quantity</div>
          <div className="text-md">
            {fetchingItem ? (
              <SkeletonLoader height="4" />
            ) : (
              selectedItem?.quantity
            )}
          </div>
        </div>

        <div>
          <div className="text-xs text-slate-500">Status</div>
          <Label status={selectedItem?.status || "PENDING"} />
        </div>
      </div>

      <div className="flex justify-between py-3">
        <div>Events</div>
        <button
          className="text-xs bg-[#4f87f6] px-2 py-1 rounded-md"
          onClick={() => setShowCreateEventModal?.(true)}
        >
          Log Event
        </button>
      </div>

      <Events />
    </div>
  );
};

export default SidePanel;

interface ISkeletonLoader {
  rounded?: string;
  height?: string;
  width?: string;
  extraClasses?: string;
  bg?: string;
}
const SkeletonLoader: React.FC<ISkeletonLoader> = ({
  rounded = "rounded-full",
  height = "5",
  width = "6",
  bg = "bg-slate-200",
  extraClasses,
}) => {
  return (
    <div
      className={`animate-pulse ${bg} ${rounded} h-${height} w-${width} ${extraClasses}`}
    />
  );
};
