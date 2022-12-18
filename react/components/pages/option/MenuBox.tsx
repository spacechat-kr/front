import { ButtonBase } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

export const MenuBox = () => {
  const router = useRouter();
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
          <ButtonBase
            style={{ borderRadius: 8, padding: 4, margin: 4, flexDirection: "column", flex: 1 }}
            onClick={() => router.push("#export")}
          >
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
