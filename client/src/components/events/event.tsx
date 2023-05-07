import React, { useState } from "react";

const Event: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const toggler = () => setToggle(!toggle);
  return (
    <div onClick={toggler} className="cursor-pointer">
      <div
        className={`grid grid-flow-col grid-cols-4 w-full auto-cols-max hover:bg-[#262833] cursor-pointer items-center ${
          toggle ? "bg-[#262833]" : ""
        }`}
      >
        <div className="p-4 col-span-2 flex items-center">
          Docked the habour
        </div>
        <div className="p-4 self-start">Nairobi</div>
        <div className="p-4 flex flex-col">G4S Kenya</div>
      </div>

      <div
        className={`text-xs text-slate-400 px-4 -mt-2 pb-4 bg-[#262833] transition-all ease-in-out ${
          toggle ? "blank" : "hidden"
        }`}
      >
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content.
      </div>
    </div>
  );
};

export default Event;
