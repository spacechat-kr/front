import { Add } from "@mui/icons-material";
import { Box, ButtonBase, TextareaAutosize } from "@mui/material";
import dayjs from "dayjs";
import { useState, useRef } from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { ChatListState, myTestDeviceId } from "./ChatList";

const FileInputState = atom<boolean>({ key: "FileInputState", default: false });
export const FileInputBox = () => {
  const [isFileInput, setIsFileInput] = useRecoilState(FileInputState);
  const onClick = () => setIsFileInput((prev) => !prev);
  return (
    <div
      style={{
        position: "relative",
        height: 0,
        width: 0,
        overflow: "visible",
        color: "#E7FFFF",
        top: -80,
        left: "4vw",
      }}
    >
      <Box
        sx={{
          width: "max-content",
          display: "flex",
          flexDirection: "row",
          maxWidth: "96vw",
          button: {
            display: "flex",
            flexDirection: "column",
            borderRadius: 100,
            opacity: isFileInput ? 1 : 0,
            top: isFileInput ? 0 : 24,
            visibility: isFileInput ? "visible" : "hidden",
            transition: "visibility 0.2s, top ease-out 0.2s, opacity ease-out 0.1s",
          },
          ".txt": {
            fontFamily: "AppleSDGothicNeo",
            position: "relative",
            mt: -2,
            fontSize: "min(4vw, 15px)",
            fontWeight: 500,
            letterSpacing: "-0.4px",
            textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
          },
        }}
      >
        <ButtonBase onClick={onClick} style={{ flex: 1, marginRight: "3vw" }}>
          <img src="/icons/chatGallery.svg" width="100%" />
          <div className="txt">사진첩</div>
        </ButtonBase>
        <ButtonBase onClick={onClick} style={{ flex: 1, marginRight: "3vw", transitionDelay: "0.05s" }}>
          <img src="/icons/chatCamera.svg" width="100%" />
          <div className="txt">카메라</div>
        </ButtonBase>
        <ButtonBase onClick={onClick} style={{ flex: 1, marginRight: "3vw", transitionDelay: "0.1s" }}>
          <img src="/icons/chatVideo.svg" width="100%" />
          <div className="txt">동영상</div>
        </ButtonBase>
        <ButtonBase onClick={onClick} style={{ flex: 1, marginRight: "3vw", transitionDelay: "0.15s" }}>
          <img src="/icons/chatMoon.svg" width="100%" />
          <div className="txt">파일첨부</div>
        </ButtonBase>
      </Box>
    </div>
  );
};

const FileInputIcon = () => {
  const [isFileInput, setIsFileInput] = useRecoilState(FileInputState);
  return (
    <ButtonBase
      style={{ borderRadius: 12, padding: 8, margin: 4, overflow: "hidden" }}
      onClick={() => setIsFileInput((prev) => !prev)}
    >
      <Add
        style={{
          fontSize: 28,
          color: "#ffffffb9",
          transform: "scale(1.5)",
          rotate: isFileInput ? "45deg" : undefined,
          transition: "rotate 0.3s",
        }}
      />
    </ButtonBase>
  );
};

export const InputBox = () => {
  const setChatList = useSetRecoilState(ChatListState);
  const [value, setValue] = useState("");
  const TextareaRef = useRef<HTMLTextAreaElement>(null);
  const onClickSend = () => {
    setValue("");
    if (TextareaRef.current) TextareaRef.current.value = "";
    setChatList((prev) => {
      return [
        ...prev,
        {
          createdAt: dayjs().format("YYYY-MM-DDTHH:mm:ss"),
          message: value,
          type: "text",
          deviceId: myTestDeviceId,
        },
      ];
    });
    const chatListDiv = document.getElementById("chatList");
    if (chatListDiv) {
      setTimeout(() => {
        chatListDiv.scrollTop = chatListDiv.scrollHeight;
      }, 10);
    }
  };
  return (
    <div style={{ background: "#1d202d", display: "flex", alignItems: "end" }}>
      <FileInputIcon />
      <TextareaAutosize
        onChange={(t) => setValue(t.target.value)}
        ref={TextareaRef}
        style={{
          fontFamily: "AppleSDGothicNeo",
          paddingBottom: 6,
          overflowY: value.length > 10 ? "scroll" : "auto",
          maxHeight: 240,
          width: "100%",
          background: "#1d202d",
          border: "none",
          paddingLeft: 8,
          color: "white",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: 18,
          lineHeight: "26px",
          letterSpacing: "-0.4px",
          outline: "none",
          marginBottom: 8,
        }}
      />
      <ButtonBase
        style={{ padding: 12, background: value.trim().length > 0 ? "#3f58ff" : "#565656", marginLeft: 4 }}
        disabled={value.trim().length === 0}
        onClick={onClickSend}
      >
        <img src="/icons/send.svg" width="30px" />
      </ButtonBase>
    </div>
  );
};
