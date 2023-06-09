import React from "react";
import Event from "./event";
import { useAppContext } from "@/context/app";
import Spinner from "../reusables/spinner";

const Events: React.FC = () => {
  const { selectedItem, fetchingItem } = useAppContext();

  return (
    <div className="grid grid-flow-row divide-y divide-slate-700 bg-[#191a1c] px-4 py-2 rounded-md max-h-72 overflow-y-scroll">
      {/* Header */}
      <div className="grid grid-flow-col grid-cols-4 w-full auto-cols-max cursor-pointer text-subdued text-sm">
        <div className="col-span-2 p-4">Title</div>
        <div className="p-4">Location</div>
        <div className="p-4">custodian</div>
      </div>

      {/* Body */}
      {fetchingItem ? (
        <div className="flex w-full justify-center">
          <Spinner />
        </div>
      ) : (
        selectedItem?.events?.map((event) => (
          <Event key={event.id} event={event} />
        ))
      )}
    </div>
  );
};

export default Events;
