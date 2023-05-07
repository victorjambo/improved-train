import Sidebar from "@/components/sidebar";
import AppProvider from "@/context/app";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </AppProvider>
  );
};

export default App;
