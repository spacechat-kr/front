import type { AppProps } from "next/app";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import "/public/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
