import React from "react";
import Modal from "../reusables/modal";
import { useAppContext } from "@/context/app";

const CreateEventModal: React.FC = () => {
  const { showCreateEventModal: show, setShowCreateEventModal: closeModal } =
    useAppContext();
  const disabled = false; // TODO

  return (
    <Modal
      show={!!show}
      closeModal={() => closeModal?.(false)}
      title="Log Event"
    >
      <div className="flex flex-col w-full space-y-4 p-1">
        <div className="grid grid-cols-4 w-full">
          <label htmlFor="title">Title:</label>
          <div className="col-span-3">
            <input
              id="title"
              name="title"
              placeholder="Event title ..."
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
              placeholder="Event Description ..."
            />
          </div>
        </div>

        <div className="grid grid-cols-4 w-full">
          <div className="col-start-2 col-span-3">
            <div className="grid grid-cols-2 gap-10">
              <div className="">
                <label htmlFor="location">Location</label>
                <select
                  id="location"
                  name="location"
                  className="w-full py-2.5 px-2 border border-[#3e3f4b] bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md"
                  defaultValue="Nairobi"
                >
                  <option>Nairobi</option>
                  <option>Mombasa</option>
                </select>
              </div>

              <div>
                <label htmlFor="custodian">Custodian</label>
                <select
                  id="custodian"
                  name="custodian"
                  className="w-full py-2.5 px-2 border border-[#3e3f4b] bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md"
                  defaultValue="Amazon"
                >
                  <option>Amazon</option>
                  <option>G4S</option>
                </select>
              </div>
            </div>
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
            Log
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateEventModal;
