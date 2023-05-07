import React from "react";
import Modal from "../reusables/modal";
import { AuthType, useAuthContext } from "@/context/auth";

const AuthModals: React.FC = () => {
  const { showModal, setShowModal, authType } = useAuthContext();
  const disabled = false; // TODO

  return (
    <Modal
      show={!!showModal}
      closeModal={() => setShowModal?.(false)}
      title={authType}
      width="w-96"
    >
      <div className="flex flex-col w-full space-y-4 p-1">
        {authType === AuthType.Signup && (
          <div className="flex flex-col w-full">
            <label htmlFor="title">Name</label>
            <div className="col-span-3">
              <input
                id="name"
                name="name"
                placeholder="Name..."
                className="w-full px-4 py-2 border border-[#3e3f4b] bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md"
              />
            </div>
          </div>
        )}

        <div className="flex flex-col w-full">
          <label htmlFor="title">Email</label>
          <div className="col-span-3">
            <input
              id="email"
              name="email"
              placeholder="example@admin.io"
              className="w-full px-4 py-2 border border-[#3e3f4b] bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="title">Password</label>
          <div className="col-span-3">
            <input
              id="password"
              name="password"
              placeholder="Password..."
              type="password"
              className="w-full px-4 py-2 border border-[#3e3f4b] bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="title">Confirm Password</label>
          <div className="col-span-3">
            <input
              id="confirm-password"
              name="confirm-password"
              placeholder="Password..."
              type="password"
              className="w-full px-4 py-2 border border-[#3e3f4b] bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md"
            />
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
            {authType}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AuthModals;
