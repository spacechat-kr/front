import axios from "axios";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import "/public/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const isLocalhost = location.hostname === "localhost";
    axios.defaults.baseURL = isLocalhost ? "http://3.113.100.47:8080/" : "https://api.spacechat.kr/";
  }, []);
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
