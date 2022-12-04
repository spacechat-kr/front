import {
  Add,
  AddCircleOutline,
  AddOutlined,
  AddRounded,
  AddSharp,
  AddTwoTone,
  ArrowBackIosNewRounded,
  Settings,
} from "@mui/icons-material";
import { ButtonBase, TextareaAutosize } from "@mui/material";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import { useState } from "react";
import { BackHeader, ChatCard } from "../../components/pages/list/chat.module";

export default function Page() {
  return (
    <>
      <Container maxWidth="md" style={{ padding: 0, background: "#1A1D2C" }}>
        <div style={{ display: "flex", flexDirection: "column", maxHeight: "100vh" }}>
          <div style={{ height: 60 }}>
            <ChatHeader />
          </div>
          <div style={{ overflowY: "scroll", flex: 1 }}>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
            <h1>bsd</h1>
          </div>

          <InputBox />
        </div>
      </Container>
    </>
  );
}
const InputBox = () => {
  const [value, setValue] = useState("");
  return (
    <div style={{ background: "#1d202d", display: "flex", alignItems: "end" }}>
      <ButtonBase style={{ borderRadius: 12, padding: 8, margin: 4 }}>
        <Add style={{ fontSize: 28, color: "#ffffffb9", transform: "scale(1.5)" }} />
      </ButtonBase>
      <TextareaAutosize
        autoFocus
        onChange={(t) => setValue(t.target.value)}
        style={{
          fontFamily: "AppleSDGothicNeo",
          // borderRadius: 25,
          paddingBottom: 6,
          overflowY: value.length > 3 ? "scroll" : "auto",
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
        }}
      />
      <ButtonBase style={{ padding: 12, background: value.length > 0 ? "#3f58ff" : "#565656", marginLeft: 4 }}>
        <img src="/icons/send.svg" width="30px" />
      </ButtonBase>
    </div>
  );
};
export const ChatHeader = () => {
  const router = useRouter();
  return (
    <div
      style={{
        // position: "sticky",
        // top: 0,
        background: "#1A1D2C",
        boxShadow: "0px 0 2px rgba(0, 0, 0, 0.15)",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 1,
      }}
    >
      <ButtonBase sx={{ ml: 1.5, borderRadius: 4, padding: 1 }}>
        <ArrowBackIosNewRounded style={{ fontSize: 24, color: "#ffffff" }} onClick={router.back} />
      </ButtonBase>
      <h3
        style={{
          display: "flex",
          fontWeight: 500,
          fontSize: 25,
          lineHeight: "36px",
        }}
      >
        채팅방뫄뫄
        <img src="/icons/letter.png" style={{ position: "relative", top: -2, marginLeft: 4, width: 35, height: 29 }} />
      </h3>
      <ButtonBase sx={{ mr: 1.5, borderRadius: 4, padding: 1 }}>
        <Settings style={{ fontSize: 33, color: "#ffffff" }} />
      </ButtonBase>
    </div>
  );
};
