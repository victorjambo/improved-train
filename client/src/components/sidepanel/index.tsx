import {
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Label from "../reusables/label";
import { useAppContext } from "@/context/app";
import Events from "../events";
import EventActions from "./eventActions";

const SidePanel: React.FC = () => {
  const { setShowSidePanel, setShowCreateEventModal } = useAppContext();

  return (
    <div>
      <div className="flex justify-between pb-8">
        <button
          className="p-2 hover:bg-[#262833] rounded-full"
          onClick={() => setShowSidePanel?.(false)}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <EventActions />
      </div>
      <div>
        <div className="font-semibold text-xl">Car and Parts</div>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </div>
      </div>

      <div className="flex flex-row justify-between border border-[#3e3f4b] rounded-md px-4 py-2 my-4">
        <div>
          <div className="text-xs text-slate-500">Price</div>
          <div className="text-md">$50</div>
        </div>

        <div>
          <div className="text-xs text-slate-500">Quantity</div>
          <div className="text-md">5000</div>
        </div>

        <div>
          <div className="text-xs text-slate-500">Status</div>
          <Label status={0} />
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
