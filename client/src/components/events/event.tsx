import { EventResponse } from "@/types";
import React, { useState } from "react";

const Event: React.FC<{ event: EventResponse }> = ({ event }) => {
  const [toggle, setToggle] = useState(false);
  const toggler = () => setToggle(!toggle);

  return (
    <div onClick={toggler} className="cursor-pointer">
      <div
        className={`grid grid-flow-col grid-cols-4 w-full auto-cols-max hover:bg-[#262833] cursor-pointer items-start ${
          toggle ? "bg-[#262833]" : ""
        }`}
      >
        <div className="p-4 col-span-2 flex items-center">{event.title}</div>
        <div className="p-4 self-start text-xs md:text-sm">{event.location}</div>
        <div className="p-4 flex flex-col text-xs md:text-sm">{event.custodian.name}</div>
      </div>

      <div
        className={`text-xs text-slate-400 px-4 -mt-2 pb-4 bg-[#262833] transition-all ease-in-out ${
          toggle ? "blank" : "hidden"
        }`}
      >
        {event.description}
      </div>
    </div>
  );
};

export default Event;
