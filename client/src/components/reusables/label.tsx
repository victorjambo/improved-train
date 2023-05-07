import React from "react";

enum Status {
  Pending,
  Shipping,
  Delivered,
}

const props = {
  0: {
    color: "bg-[#e86b54] border-[#e86b54]",
    label: "Pending"
  },
  1: {
    color: "bg-[#ffaf4c] border-[#ffaf4c]",
    label: "Shipping"
  },
  2: {
    color: "bg-[#51a380] border-[#51a380]",
    label: "Delivered"
  }
}

const Label: React.FC<{status: Status}> = ({ status }) => {
  return (
    <div className={`text-xs border bg-opacity-20 py-0.5 px-1 w-fit rounded-md ${props[status].color}`}>
      {props[status].label}
    </div>
  );
};

export default Label;
