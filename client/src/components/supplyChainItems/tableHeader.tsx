import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import React from "react";

const TableHeader: React.FC = () => {
  return (
    <div className="grid grid-flow-col grid-cols-5 w-full auto-cols-max cursor-pointer text-subdued text-sm">
      <div className="col-span-2 p-4">Title</div>
      <div className="p-4">Price $</div>
      <div className="p-4">Quantity</div>
      <div className="p-4">Status</div>
      <div className="p-4">
        <EllipsisVerticalIcon className="h-5 w-5 text-transparent" />
      </div>
    </div>
  );
};

export default TableHeader;
