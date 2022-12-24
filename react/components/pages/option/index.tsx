import { Box, ButtonBase, Checkbox } from "@mui/material";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { metadata } from "../../../constant/testData";
import { ExampleChatList } from "../../../pages/list/chat";
import { encrypt } from "../../ignore/Crypto";
import { ChatCard } from "../list/chat.module";
import { NoChatList } from "./NoChatList";

let remainType = "none";

export const ExportModal = () => {
  const router = useRouter();
  const [type, setType] = useState<"export" | "none">("none");
  const [isExporting, setIsExporting] = useState(false);
  const checkRef = useRef<HTMLInputElement[]>([]);
  useEffect(() => {
    if (!router.asPath.includes("#") && ["export", "none"].includes(type)) remainType = type;
    const aftertype = router.asPath.split("#")[1] as any;
    setType(aftertype ? aftertype : "none");
  }, [router]);

  const onClickExport = useCallback(() => {
    setIsExporting(true);
    setTimeout(() => {
      let fileName = `spacechat_${dayjs().toISOString()}.txt`;

      // 1. 내보내기 - 암호화 -> 백엔드에서 처리 후에 프론트로 받아와야할 것 같은데 백엔드 성능이 낮으니깐 무시..?
      // const encryptedText = encrypt(JSON.stringify(metadata));

      // 2. 불러오기 - 복호화
      // const decryptedText = decrypt(encryptedText);
      // console.log("decryptedText", decryptedText);

      const element = document.createElement("a");
      const file = new Blob([JSON.stringify(metadata)], {
        type: "text/plain",
      });
      element.href = URL.createObjectURL(file);
      element.download = fileName;
      document.body.appendChild(element); // FireFox
      element.click();
      setIsExporting(false);
    }, 100);
  }, []);

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
            height: "100%",
          }}
        >
          <ButtonBase
            sx={{ borderRadius: 1, padding: "16px 32px 32px 32px", m: 0 }}
            disableRipple
            onClick={(e) => {
              router.back();
              e.stopPropagation();
            }}
          >
            <img src="/icons/option/downChatList.svg" />
          </ButtonBase>
          <div style={{ marginBottom: 16 }}>
            {isExporting ? `채팅 내보내기를 진행중입니다.` : "텍스트로 내보낼 채팅방을 선택해주세요."}
          </div>

          <div style={{ overflow: "scroll", height: "100%", marginBottom: 16, paddingBottom: 16 }}>
            {ExampleChatList.length === 0 ? (
              <NoChatList />
            ) : (
              ExampleChatList.map((item, i) => {
                return (
                  <div key={item.key} style={{ display: "flex", alignItems: "center" }}>
                    <Checkbox
                      color="default"
                      sx={{ p: 0, width: "6vw", maxWidth: 32 }}
                      inputRef={(ref) => {
                        if (ref) checkRef.current.push(ref);
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <ChatCard
                        sx={{ padding: "0 20px 0 12px", width: "100%", background: "white" }}
                        name={item.name}
                        message={item.message}
                        time={item.created_at}
                        onClick={() => checkRef.current[i].click()}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "fixed",

              left: 0,
              width: "calc(100vw - 80px)",
              maxWidth: 820,
            }}
          >
            <ButtonBase
              style={{
                maxWidth: 400,
                background: "linear-gradient(90deg, #501788 4.55%, #724CC0 90.68%)",
                borderRadius: 20,
                fontFamily: "AppleSDGothicNeo",
                fontSize: 14,
                bottom: 24,
                lineHeight: "20px",
                letterSpacing: "-0.4px",
                width: "100%",
                padding: 14,
                color: "white",
              }}
              onClick={onClickExport}
            >
              내보내기
            </ButtonBase>
          </div>
        </div>
      </Box>
    </>
  );
};
