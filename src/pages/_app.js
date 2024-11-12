import { Toaster } from "react-hot-toast";

import "tiny-slider/dist/tiny-slider.css";

import "@/assets/css/tailwind.css";
import "@/assets/css/materialdesignicons.min.css";
import "@/assets/css/custom.css";
import Head from "next/head";

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
      <Component {...pageProps} />
      <Toaster
        containerStyle={{
          zIndex: "99999999999999999999999999",
        }}
      />
    </>
  );
}
