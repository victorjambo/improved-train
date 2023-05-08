import AuthModals from "@/components/auth/authmodals";
import EditItemModal from "@/components/create/editItem";
import CreateEventModal from "@/components/create/event";
import CreateItemModal from "@/components/create/item";
import Sidebar from "@/components/sidebar";
import AppProvider from "@/context/app";
import AuthProvider from "@/context/auth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <AppProvider>
        <Sidebar>
          <>
            <Component {...pageProps} />
            <CreateItemModal />
            <EditItemModal />
            <CreateEventModal />
            <AuthModals />
          </>
        </Sidebar>
      </AppProvider>
    </AuthProvider>
  );
};

export default App;
