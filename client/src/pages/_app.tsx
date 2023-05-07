import CreateEventModal from "@/components/create/event";
import CreateItemModal from "@/components/create/item";
import Sidebar from "@/components/sidebar";
import AppProvider from "@/context/app";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Sidebar>
        <>
          <Component {...pageProps} />
          <CreateItemModal />
          <CreateEventModal />
        </>
      </Sidebar>
    </AppProvider>
  );
};

export default App;
