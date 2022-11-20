import { globalStyles } from "../styles/globalStyles";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

import { Toaster } from "react-hot-toast";
import type { AppProps } from "next/app";
import { RegisterVideo } from "../components/RegisterVideo";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>AluraTube</title>
      </Head>
      <Toaster
        position="top-right"
        containerClassName="div-notification"
        toastOptions={{
          className: "message",
          duration: 6000,
        }}
      />
      <Component {...pageProps} />
      <RegisterVideo />
    </ThemeProvider>
  );
}
