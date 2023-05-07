import { useState } from "react";
import MobileSidebar from "./mobile";
import DesktopSidebar from "./desktop";
import Header from "../reusables/header";
import Search from "../search";
import AuthNavItems from "../auth/navItems";

const Sidebar: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentNav, setCurrentNav] = useState("Dashboard");

  const changeCurrent = (nav: string) => {
    setCurrentNav(nav);
  };

  return (
    <>
      <Header />
      <div>
        {/* Mobile */}
        <MobileSidebar
          {...{ sidebarOpen, setSidebarOpen, currentNav, changeCurrent }}
        />

        {/* Static sidebar for desktop */}
        <DesktopSidebar {...{ currentNav, changeCurrent }} />

        <div className="flex flex-1 flex-col lg:pl-48 h-screen overflow-y-scroll bg-[#101213] text-white">
          <main className="flex-1 md:mx-4 my-4 lg:mx-8 lg:my-0">
            <div className="py-8">
              <div>
                <div className="w-full flex justify-between items-center">
                  <div className="flex space-x-3 items-center">
                    <h3 className="text-2xl font-bold text-white pr-2">
                      Dashboard
                    </h3>
                  </div>

                  <div className="flex space-x-3">
                    <Search />
                    <AuthNavItems />
                  </div>
                </div>
              </div>
              <div className="pt-8">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
