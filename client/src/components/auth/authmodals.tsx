import React, { useState } from "react";
import Modal from "../reusables/modal";
import { AuthType, useAuthContext } from "@/context/auth";
import { http } from "@/utils";

const AuthModals: React.FC = () => {
  const { showModal, setShowModal, authType, setisAuth, setUser } =
    useAuthContext();
    const [disabled, setDisabled] = useState(false); // TODO

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleAuth = async () => {
    let url = "/auth/login";
    let data: Record<string, string> = {
      email,
      password,
    };
    if (authType === AuthType.Signup) {
      url = "/auth/signup";
      data = {
        email,
        password,
        name,
      };
    }

    await http
      .post(url, data)
      .then((res) => res.data)
      .then((res) => handleSuccess(res))
      .catch((err) => handleErrors(err));
  };

  const handleSuccess = (res: {
    id: number;
    email: string;
    name: string;
    accessToken: string;
  }) => {
    const user = {
      id: res.id,
      email: res.email,
      name: res.name,
    };
    setisAuth?.(true);
    setShowModal?.(false);
    setUser?.(user);
    localStorage.setItem("token", JSON.stringify(res.accessToken));
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleErrors = (err: any) => {
    // TODO
  };

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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password..."
              type="password"
              className="w-full px-4 py-2 border border-[#3e3f4b] bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md"
            />
          </div>
        </div>

        {authType === AuthType.Signup && (
          <div className="flex flex-col w-full">
            <label htmlFor="title">Confirm Password</label>
            <div className="col-span-3">
              <input
                id="confirm-password"
                name="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Password..."
                type="password"
                className="w-full px-4 py-2 border border-[#3e3f4b] bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md"
              />
            </div>
          </div>
        )}

        <div className="self-center w-2/3 pt-10">
          <button
            className={`transition text-sm px-5 py-2 rounded-lg border flex items-center justify-center text-center w-full ${
              disabled
                ? "border-[#3e3f4b] bg-[#3e3f4b] text-[#6a6d7c] cursor-not-allowed"
                : "cursor-pointer border-[#4f87f6] bg-[#4f87f6] hover:border-[#1859f1] hover:bg-[#1859f1] text-white"
            }`}
            onClick={handleAuth}
          >
            {authType}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AuthModals;
