import Container from "@mui/material/Container";
import { ButtonBase } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import { ArrowBackIosNewRounded, ArrowCircleLeftRounded, ArrowForwardIosRounded, Settings } from "@mui/icons-material";
import { useRouter } from "next/router";
import { Box } from "@mui/system";

export default function Page() {
  return (
    <>
      <Container maxWidth="md" style={{ padding: 0, background: "white", height: "100vh" }}>
        <OptionHeader />
        <MenuBox />
        <MenuList />
        <Version />
      </Container>
    </>
  );
}

const Version = () => {
  const version = "version 0.1.1";
  return (
    <div style={{ position: "fixed", bottom: 8,width:"100vw",textAlign:'center',maxWidth:900 }}>
      <p style={{ color: "#787878" }}>{version}</p>
    </div>
  );
};
const MenuList = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 64 }}>
      <div style={{ maxWidth: 560, width: "60vw" }}>
        <Box
          sx={{
            h2: { color: "black" },
            "p.button": { fontWeight: 500, fontSize: 18, lineHeight: "26px", color: "black" },
            "button.button": {
              borderRadius: 1,
              padding: 1,
              margin: 1,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            },
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <h2>기타</h2>
          <ButtonBase className="button">
            <p className="button">자주 묻는 질문</p>
            <ArrowForwardIosRounded style={{ marginBottom: 2.3 }} />
          </ButtonBase>
          <ButtonBase className="button">
            <p className="button">문의하기</p>
            <ArrowForwardIosRounded style={{ marginBottom: 2.3 }} />
          </ButtonBase>
        </Box>
      </div>
    </div>
  );
};
const MenuBox = () => {
  return (
    <div style={{ zIndex: 1, position: "relative", paddingTop: 240, display: "flex", justifyContent: "center" }}>
      <div
        style={{
          background: "#FFFFFF",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.25)",
          borderRadius: 10,
          width: "70vw",
          height: 180,
          maxWidth: 480,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            padding: "42px 2vw 0 2vw",
            ".txt": {
              fontWeight: 400,
              fontSize: 12,
              lineHeight: "17px",
              letterSpacing: -0.4,
              color: "#181818",
              marginTop: "5px",
            },
            flex: 1,
          }}
        >
          <ButtonBase style={{ borderRadius: 8, padding: 4, margin: 4, flexDirection: "column", flex: 1 }}>
            <img src="/icons/option/changeNickname.svg" />
            <p className="txt">이름수정</p>
          </ButtonBase>
          <ButtonBase style={{ borderRadius: 8, padding: 4, margin: 4, flexDirection: "column", flex: 1 }}>
            <img src="/icons/option/expertChat.svg" />
            <p className="txt">채팅 내보내기</p>
          </ButtonBase>
          <ButtonBase style={{ borderRadius: 8, padding: 4, margin: 4, flexDirection: "column", flex: 1 }}>
            <img src="/icons/option/importChat.svg" />
            <p className="txt">채팅 불러오기</p>
          </ButtonBase>
        </Box>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <ButtonBase
            sx={{
              background: "linear-gradient(90deg, #EB2929 4.55%, #E65656 90.68%)",
              borderRadius: 20,
              padding: "10px 60px",
            }}
          >
            <p style={{ fontSize: 14, lineHeight: "20px" }}>채팅내용 일괄 삭제</p>
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};
const OptionHeightState = atom<number>({ key: "OptionHeightState", default: 1000 });
export const OptionHeader = () => {
  const router = useRouter();
  const [height, setHeight] = useRecoilState(OptionHeightState);
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
        // zIndex: 1,
        position: "absolute",
        width: "100%",
        maxWidth: 900,
        overflow: "hidden",
        top: -height,
        transition: "opacity 0.3s, top 0.2s",
        opacity: height === 1000 ? 0 : 1,
      }}
    >
      <div
        style={{
          zIndex: 10,
          width: "100%",
          maxWidth: 900,
          position: "fixed",
          top: 0,
          display: "flex",
          justifyContent: "space-between",
          
        }}
      >
        <div>
          <ButtonBase style={{ borderRadius: 8, padding: 4, margin: 16 }} onClick={router.back}>
            <ArrowBackIosNewRounded style={{ fontSize: 33, color: "#CEC2FF" }} />
          </ButtonBase>
        </div>
        <div>
          {/* <ButtonBase style={{ borderRadius: 8, padding: 4, margin: 16 }} onClick={onClickSetting}>
            <Settings style={{ fontSize: 33, color: "#CEC2FF" }} />
          </ButtonBase> */}
        </div>
      </div>
      <img src="/images/header_background.svg" width="100%" />
    </header>
  );
};
