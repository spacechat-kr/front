import axios from "axios";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import "/public/styles/globals.css";

export const ax = axios.create({
  baseURL: "http://3.113.100.47:8080/",
  timeout: 10000,
  // headers: { "X-Custom-Header": "foobar" },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
