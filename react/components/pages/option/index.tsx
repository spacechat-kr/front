import { Box, ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ChatCard } from "../list/chat.module";

let remainType = "none";

export const ExportModal = () => {
  const router = useRouter();
  const [type, setType] = useState<"export" | "none">("none");

  useEffect(() => {
    if (!router.asPath.includes("#") && ["export", "none"].includes(type)) remainType = type;
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
          transition: "visibility 0.2s, opacity 0.2s",
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
          letterSpacing: "-0.4px",
          color: "black",
          background: "white",
          height: "calc(100vh - 70px)",
          bottom: 0,
          left: "50%",
          transform: `translate(-50%, ${type !== "none" ? "0" : "20%"})`,
          width: "100vw",
          maxWidth: 880,
          zIndex: 1302,
          padding: "0 28px 8px 28px",
          borderRadius: "30px 30px 0 0",
          opacity: type !== "none" ? 1 : 0,
          visibility: type !== "none" ? "visible" : "hidden",
          transition: "transform 0.2s, visibility 0.2s, opacity 0.2s",
          div: {
            fontFamily: "AppleSDGothicNeo",
            fontWeight: 500,
            fontSize: 18,
            lineHeight: "26px",
            letterSpacing: "-0.4px",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            overflow: "scroll",
            // height: "100%",
          }}
        >
          <ButtonBase
            sx={{ borderRadius: 1, padding: "16px 32px 32px 32px", m: 0 }}
            disableRipple
            onMouseDown={() => router.back()}
            onTouchStart={() => router.back()}
          >
            <img src="/icons/option/downChatList.svg" />
          </ButtonBase>
          <div style={{ marginBottom: 16 }}>텍스트로 내보낼 채팅방을 선택해주세요.</div>
          <ChatCard
            isTopBorder
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="13:04 PM"
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="01:04 AM"
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="12/04"
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="11/04"
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="2022.11.04."
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="2022.09.04"
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="2021.01.04"
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="2020.11.04"
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="01:04 AM"
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="12/04"
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="11/04"
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="2022.11.04."
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="2022.09.04"
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="2021.01.04"
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="2020.11.04"
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="01:04 AM"
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="12/04"
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="11/04"
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="2022.11.04."
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="2022.09.04"
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="2021.01.04"
          />
          <ChatCard
            name="채팅방뫄뫄"
            message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            time="2020.11.04"
          />
        </div>
      </Box>
    </>
  );
};
