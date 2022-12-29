import { Box, ButtonBase, Checkbox, FormControl, FormHelperText, Input } from "@mui/material";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { metadata } from "../../../constant/testData";
import { InputDescStyle, InputTitleStyle } from "../../../pages";
import { ExampleChatList } from "../../../pages/list/chat";
import { ax } from "../../../pages/_app";
import { encrypt } from "../../ignore/Crypto";
import { userDataState } from "../index/HomeHeader";
import { ChatCard } from "../list/chat.module";
import { NoChatList } from "./NoChatList";

let remainType = "none";

export const ExportModal = () => {
  const router = useRouter();
  const [type, setType] = useState<"export" | "name" | "none">("none");
  const [isExporting, setIsExporting] = useState(false);
  const [userData, setUserData] = useRecoilState(userDataState);
  const checkRef = useRef<HTMLInputElement[]>([]);
  const nameRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!router.asPath.includes("#") && ["export", "name", "none"].includes(type)) remainType = type;
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

  const ExportModal = () => (
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
  );
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

      {type === "export" && <ExportModal />}
      {type === "name" && (
        <>
          <Box
            sx={{
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.25)",
              borderRadius: "19px",
              padding: "8px 16px",
              overflow: "hidden",

              "input::placeholder": {
                fontSize: 16.4,
              },
              width: 300,
              display: "flex",
              flexDirection: "column",
              "textarea:focus": {
                // outline: "none",
                outline: "#00000039 0.5px solid !important",
              },
              zIndex: 1302,
              position: "fixed",
              background: "white",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <FormControl variant="standard" sx={{ m: "8px 8px 0 8px", mt: 2 }}>
              <b>이름 {userData.name ? "변경" : "생성"}</b>
              <Input
                inputRef={nameRef}
                onFocus={(ref) => ref.target.setAttribute("maxLength", "20")}
                onChange={(r) => {
                  const len = document.getElementById("titleLength");
                  if (len) {
                    len.innerText = `${r.target.value.length}/20`;
                    if (r.target.value.length === 0 || r.target.value.length > 20) len.style.color = "red";
                    else len.style.color = "#00000099";
                  }
                }}
                style={InputTitleStyle}
                id="standard-adornment-weight"
                placeholder={`${userData.name ? "변경" : "생성"}할 닉네임을 입력해주세요`}
                defaultValue={userData.name ? userData.name : undefined}
                maxRows={1}
              />
              <FormHelperText style={{ display: "flex", justifyContent: "space-between" }}>
                <div> </div>
                <div id="titleLength">{userData.name ? userData.name.length : 0}/20</div>
              </FormHelperText>
              <ButtonBase
                onClick={() => {
                  if (!nameRef.current) return;
                  const name = nameRef.current.value;
                  const isChange = confirm(`${name}로 이름을 ${userData.name ? "변경" : "생성"}하시겠습니까?`);
                  if (isChange) {
                    setUserData((prev) => {
                      return { ...prev, name };
                    });
                    if (!userData.name)
                      ax.post(`/user/create`, { name, userId: userData.uuid }).then(() => router.back());
                    else ax.post(`/user/update`, { name, userId: userData.uuid }).then(() => router.back());
                  } else {
                    nameRef.current.value = userData.name ? userData.name : "";
                  }
                }}
                sx={{
                  fontFamily: "AppleSDGothicNeo",
                  background: "linear-gradient(90deg, #501788 4.55%, #724CC0 90.68%)",
                  marginBottom: 2,
                  marginTop: 2,
                  color: "white",
                  fontSize: 14,
                  lineHeight: "20px",
                  letterSpacing: "-0.4px",
                  borderRadius: "20px",
                  padding: 1,
                }}
              >
                이름 {userData.name ? "변경" : "생성"}
              </ButtonBase>
            </FormControl>
          </Box>
        </>
      )}
    </>
  );
};
