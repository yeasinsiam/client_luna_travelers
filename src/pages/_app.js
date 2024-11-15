import { Toaster } from "react-hot-toast";
import NextNProgress from "nextjs-progressbar";

import "tiny-slider/dist/tiny-slider.css";

import "@/assets/css/tailwind.css";
import "@/assets/css/materialdesignicons.min.css";
import "@/assets/css/custom.css";
import Head from "next/head";
import { SWRConfig } from "swr";
import axios from "@/utils/axios";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <NextNProgress
        color="#ef4444"
        height={4}
        options={{ showSpinner: false }}
      />
      <SWRConfig
        value={{
          fetcher: (url) => axios.get(url).then((res) => res.data),
          keepPreviousData: true,
          // fallback: pageProps.fallback,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
      <Toaster
        containerStyle={{
          zIndex: "99999999999999999999999999",
        }}
      />
    </>
  );
}
