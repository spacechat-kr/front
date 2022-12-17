import { useEffect, useState } from "react";
import { Box, ButtonBase } from "@mui/material";
import Container from "@mui/material/Container";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import Map from "../components/Map";
import { useRouter } from "next/router";
import { HomeHeader, IsHideHomeHeaderState } from "../components/pages/index/HomeHeader";
import { MapNavigation } from "../components/pages/index/MapNavigation";

export default function Page() {
  return (
    <>
      <Container maxWidth="md" style={{ padding: 0 }}>
        <HomeHeader />
        <div style={{ display: "flex", flexDirection: "column", maxHeight: "100vh" }}>
          <Map />
          <MapNavigation />
          <WriteModal />
        </div>
      </Container>
    </>
  );
}

const ModalList = {
  write: {
    imgSrc: "/icons/modalWrite.png",
    confirmText: "여기에 쪽지 놓기",
    cancelText: "다른 곳에 쪽지 놓기",
    content: () => (
      <>
        채팅방뫄뫄
        <br />
        제발들어와주세요... <br />
        제발들어와주세요... <br />
        제발들어와주세요...
      </>
    ),
  },
  enter: {
    imgSrc: "/icons/modalWrite.png",
    confirmText: "참여하기",
    cancelText: "취소",
    content: () => (
      <>
        채팅방뫄뫄
        <br />
        제발들어와주세요... <br />
        제발들어와주세요... <br />
        제발들어와주세요...
      </>
    ),
  },
  out: {
    imgSrc: "/icons/modalAlert.svg",
    confirmText: "확인",
    content: () => (
      <>
        내 위치 3km 이내에만
        <br />
        쪽지를 놓을 수 있어요!
      </>
    ),
  },
  none: {
    cancelText: "",
    content: () => <div></div>,
  },
};
let remainType = "none";
export const WriteModal = () => {
  const router = useRouter();
  const [type, setType] = useState<"write" | "none">("none");

  useEffect(() => {
    if (!router.asPath.includes("#") && ["write", "none"].includes(type)) remainType = type;
    const aftertype = router.asPath.split("#")[1] as any;
    setType(aftertype ? aftertype : "none");
  }, [router]);

  const modalTyle = type != "none" ? type : remainType;
  return (
    <>
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
          width: "100vw",
          maxWidth: 900,
          height: "100vh",
          position: "fixed",
          opacity: type !== "none" ? 1 : 0,
          visibility: type !== "none" ? "visible" : "hidden",
          // transition: "visibility ease-in 0.1s, opacity ease-in 0.1s",
          zIndex: 1301,
        }}
        onClick={() => router.back()}
      ></div>
      <Box
        sx={{
          position: "fixed",
          fontFamily: "AppleSDGothicNeo",
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "29px",
          textAlign: "center",
          letterSpacing: "-0.4px",
          color: "black",
          background: "white",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: 300,
          zIndex: 1302,
          padding: "20px 28px 8px 28px",
          span: {
            color: "#E65555",
            fontWeight: 700,
          },
          borderRadius: "10px",
          opacity: type !== "none" ? 1 : 0,
          visibility: type !== "none" ? "visible" : "hidden",
          // transition: "visibility ease-in 0.1s, opacity ease-in 0.1s",
          display: "flex",
          flexDirection: "column",
          button: {
            borderRadius: "20px",
            padding: 1,
          },
          "#confirm": {
            fontFamily: "AppleSDGothicNeo",
            background: "linear-gradient(90deg, #501788 4.55%, #724CC0 90.68%)",
            marginTop: 2,
            color: "white",
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.4px",
          },
          "#cancel": {
            marginTop: 1,
            fontFamily: "AppleSDGothicNeo",
            fontSize: 13,
            color: "#551E8F",
            lineHeight: "20px",
            letterSpacing: "-0.4px",
          },
        }}
      >
        <div style={{ height: 45, position: "relative", top: -85 }}>
          <img
            src={ModalList[modalTyle].imgSrc}
            width="130px"
            style={{ background: "white", border: "10px solid white", borderRadius: 100 }}
          />
        </div>
        {ModalList[modalTyle].content()}
        <ButtonBase id="confirm" onClick={() => router.back()}>
          {ModalList[modalTyle].confirmText}
        </ButtonBase>
        <ButtonBase id="cancel" onClick={() => router.back()}>
          {ModalList[modalTyle].cancelText}
        </ButtonBase>
      </Box>
    </>
  );
};
