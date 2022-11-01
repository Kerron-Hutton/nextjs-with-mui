import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { AppContextProvider } from "../context/AppContext";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}
