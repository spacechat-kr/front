import { Box, ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const ModalList = {
  alram: {
    imgSrc: "/icons/modalAlert.svg",
    cancelText: "알림 끄기",
    content: () => (
      <>
        알람을 끄면
        <br />
        채팅이 와도 울리지 않아요.
        <br />
        <span>정말 알림을 끌까요?</span>
      </>
    ),
  },
  out: {
    imgSrc: "/icons/modalAlert.svg",
    cancelText: "채팅방 나가기",
    content: () => (
      <>
        채팅방을 나가면
        <br />
        기록이 모두 사라져요.
        <br />
        <span>정말 채팅방을 나갈까요?</span>
      </>
    ),
  },
  report: {
    imgSrc: "/icons/modalMail.svg",
    cancelText: "메일로 상대방 신고하기",
    content: () => (
      <>
        상대방이 불쾌한 행동을 하나요?
        <br />
        메일로 신고내용을 보내주세요.
      </>
    ),
  },
  none: {
    cancelText: "",
    content: () => <div></div>,
  },
};
let remainType = "none";
export const ChatModal = () => {
  const router = useRouter();
  const [type, setType] = useState<"alram" | "out" | "report" | "none">("none");

  useEffect(() => {
    if (!router.asPath.includes("#") && ["alram", "out", "report", "none"].includes(type)) remainType = type;
    const aftertype = router.asPath.split("#")[1] as any;
    setType(aftertype ? aftertype : "none");
  }, [router]);

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
            background: "linear-gradient(90deg, #EB2929 4.55%, #E65656 90.68%)",
            marginTop: 2,
            color: "white",
          },
          "#cancel": {
            marginTop: 1,
          },
        }}
      >
        <div style={{ height: 45, position: "relative", top: -85 }}>
          <img
            src={ModalList[type != "none" ? type : remainType].imgSrc}
            width="130px"
            style={{ background: "white", border: "10px solid white", borderRadius: 100 }}
          />
        </div>
        {ModalList[type != "none" ? type : remainType].content()}
        <ButtonBase id="confirm" onClick={() => router.back()}>
          {ModalList[type != "none" ? type : remainType].cancelText}
        </ButtonBase>
        <ButtonBase id="cancel" onClick={() => router.back()}>
          취소
        </ButtonBase>
      </Box>
    </>
  );
};
