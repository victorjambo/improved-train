import React, { useMemo } from "react";

const Label: React.FC<{ status: "PENDING" | "SHIPPING" | "DELIVERED" }> = ({
  status,
}) => {
  const color = useMemo(() => {
    switch (status) {
      case "PENDING":
        return "bg-[#e86b54] border-[#e86b54]";
      case "SHIPPING":
        return "bg-[#ffaf4c] border-[#ffaf4c]";
      case "DELIVERED":
        return "bg-[#51a380] border-[#51a380]";
      default:
        return "";
    }
  }, [status]);

  return (
    <div
      className={`text-xs border bg-opacity-20 py-0.5 px-1 w-fit rounded-md ${color}`}
    >
      {status}
    </div>
  );
};

export default Label;
