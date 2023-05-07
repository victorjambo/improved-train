import React from "react";
import Modal from "../reusables/modal";
import { useAppContext } from "@/context/app";

const CreateItemModal: React.FC = () => {
  const { showCreateItemModal: show, setShowCreateItemModal: closeModal } =
    useAppContext();

  const disabled = false; // TODO

  return (
    <Modal show={!!show} closeModal={() => closeModal?.(false)} title="Create Item">
      <div className="flex flex-col w-full space-y-4 p-1">
        <div className="grid grid-cols-4 w-full">
          <label htmlFor="title">Title:</label>
          <div className="col-span-3">
            <input
              id="title"
              name="title"
              placeholder="Supply Chain title ..."
              className="w-full px-4 py-2 border border-[#3e3f4b] bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 w-full">
          <label htmlFor="desc">Description:</label>
          <div className="col-span-3">
            <textarea
              rows={4}
              name="desc"
              id="desc"
              className="w-full px-4 py-2 border border-[#3e3f4b] bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md"
              defaultValue={""}
              placeholder="Supply Chain Description ..."
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10">
          <div>
            <label htmlFor="price" className="pl-0.5">Price</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                id="price"
                name="price"
                type="number"
                placeholder="0.00"
                className="w-full pl-7 pr-4 py-2 border border-[#3e3f4b] bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="quantity" className="pl-0.5">Quantity</label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              placeholder="1"
              className="w-full px-4 py-2 border border-[#3e3f4b] bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md"
            />
          </div>
          <div>
            <label htmlFor="status" className="pl-0.5">Status</label>
            <select
              id="status"
              name="status"
              className="w-full py-2.5 px-2 border border-[#3e3f4b] bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md"
              defaultValue="Pending"
            >
              <option>Pending</option>
              <option>Shipping</option>
              <option>Delivered</option>
            </select>
          </div>
        </div>

        <div className="self-center w-2/3 pt-10">
          <button
            className={`transition text-sm px-5 py-2 rounded-lg border flex items-center justify-center text-center w-full ${
              disabled
                ? "border-[#3e3f4b] bg-[#3e3f4b] text-[#6a6d7c] cursor-not-allowed"
                : "cursor-pointer border-[#4f87f6] bg-[#4f87f6] hover:border-[#1859f1] hover:bg-[#1859f1] text-white"
            }`}
          >
            Create
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateItemModal;
