import { useState, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import Container from "@mui/material/Container";
import { ButtonBase } from "@mui/material";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import { Settings } from "@mui/icons-material";
import Map from "../components/Map";

export default () => {
  // const router = useRouter();

  // useEffect(() => {
  //   if (window.location.pathname == "/") router.push("#home");
  // }, []);
  return (
    <>
      {/* <Head>
        <title>{router.pathname}</title>
      </Head> */}
      <Container maxWidth="md" style={{ padding: 0 }}>
        {/* <button onClick={() => router.push("#map")}>map</button>
      <button onClick={() => router.push("#option")}>option</button>
      <button onClick={() => router.push("#roomList")}>roomList</button> */}
        <HomeHeader />
        <div style={{ background: "black", height: "100vh" }}>
          <Map />
        </div>
      </Container>
    </>
  );
};

const HomeHeightState = atom<number>({ key: "HomeHeightState", default: 1000 });
const HomeHeader = () => {
  const [height, setHeight] = useRecoilState(HomeHeightState);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current) setHeight(Math.max(headerRef.current.clientHeight - 305.88, 0));
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header
      ref={headerRef}
      style={{
        zIndex: 1,
        position: "absolute",
        width: "100%",
        maxWidth: 900,
        overflow: "hidden",
        top: isOpen ? -height : -600,
        transition: "opacity 0.3s, top 0.2s",
        opacity: height === 1000 ? 0 : 1,
      }}
    >
      <img src="/images/header_background.svg" width="100%" />
      <div style={{ position: "fixed", top: 0, left: 8 }}>
        <ButtonBase style={{ borderRadius: 8, padding: 4, margin: 16 }}>
          <SmsRoundedIcon style={{ fontSize: 33, transform: "scaleX(-1)", color: "#CEC2FF" }} />
        </ButtonBase>
      </div>
      <div style={{ position: "fixed", top: 0, right: 8 }}>
        <ButtonBase style={{ borderRadius: 8, padding: 4, margin: 16 }}>
          <Settings style={{ fontSize: 33, color: "#CEC2FF" }} />
        </ButtonBase>
      </div>
      {(height > 0 || !isOpen) && (
        <div
          style={{
            position: "fixed",
            top: !isOpen ? 100 : 268,
            left: "calc(50% - 18.5px)",
            transform: isOpen ? undefined : "scaleY(-1)",
            transition: "top 0.2s",
          }}
        >
          <ButtonBase style={{ borderRadius: 8, padding: 4 }} onClick={() => setIsOpen((prev) => !prev)}>
            <img src="/icons/homeDown.svg" />
          </ButtonBase>
        </div>
      )}
    </header>
  );
};
