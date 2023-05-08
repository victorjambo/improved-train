import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import DropdownPill from "../reusables/dropdownPill";
import { JazziconGenerator } from "../reusables/jazziconGenerator";
import { useAuthContext } from "@/context/auth";

export default function Loggedin() {
  const { setisAuth, user } = useAuthContext();

  const userId = user?.id;
  const username = user?.name;
  const email = user?.email;

  const handleLogout = () => {
    setisAuth?.(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <div className="">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button>
              <DropdownPill>
                <JazziconGenerator seed={userId || 0} />
              </DropdownPill>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-10 z-10 mt-3 -translate-x-1/2 transform w-52">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="flex flex-col divide-y divide-[#3e3f4b] bg-[#262833]">
                    <div className="px-4 pt-4 pb-2">
                      <div className="flex flex-row items-center space-x-2 cursor-default">
                        <JazziconGenerator seed={userId || 0} diameterRem={2} />
                        <div className="flex flex-col">
                          <span>Hello, {username}!</span>
                          <span className="text-sm text-subdued">{email}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      className="pb-4 px-4 pt-2 hover:bg-[#2b2c36]"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
