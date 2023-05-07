import { useAuthContext } from "@/context/auth";
import React from "react";
import Loggedin from "./loggedin";

const AuthNavItems: React.FC = () => {
  const { isAuth, setisAuth } = useAuthContext();

  const handleAuth = () => {
    // TODO show modal
    setisAuth?.(true);
  };

  return (
    <div>
      {isAuth ? (
        <Loggedin />
      ) : (
        <div className="flex flex-row space-x-4">
          <button
            className="rounded-lg border px-3.5 py-2 text-sm hover:bg-blue-800 hover:border-blue-600 border-[#3e3f4b] transition-colors"
            onClick={handleAuth}
          >
            Login
          </button>
          <button
            className="rounded-lg  border px-3.5 py-2 text-sm hover:bg-blue-800 hover:border-blue-600 border-[#3e3f4b] transition-colors"
            onClick={handleAuth}
          >
            Signup
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthNavItems;
