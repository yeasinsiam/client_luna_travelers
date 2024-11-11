import { Toaster } from "react-hot-toast";

import "@/assets/css/tailwind.css";
import "@/assets/css/materialdesignicons.min.css";
import "@/assets/css/custom.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        containerStyle={{
          zIndex: "99999999999999999999999999",
        }}
      />
    </>
  );
}
