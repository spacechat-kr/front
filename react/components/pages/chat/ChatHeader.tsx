import { ArrowBackIosNewRounded, Settings } from "@mui/icons-material";
import { ButtonBase } from "@mui/material";
import { useRouter } from "next/router";

export const ChatHeader = () => {
  const router = useRouter();
  return (
    <div style={{ height: 60 }}>
      <div
        style={{
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
          <img
            src="/icons/letter.png"
            style={{ position: "relative", top: -2, marginLeft: 4, width: 35, height: 29 }}
          />
        </h3>
        <ButtonBase sx={{ mr: 1.5, borderRadius: 4, padding: 1 }}>
          <Settings style={{ fontSize: 33, color: "#ffffff" }} />
        </ButtonBase>
      </div>
    </div>
  );
};
