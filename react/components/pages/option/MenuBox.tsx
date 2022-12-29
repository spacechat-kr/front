import { ButtonBase } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { ChangeEventHandler, useRef } from "react";
import { useRecoilValue } from "recoil";
import { userDataState } from "../index/HomeHeader";

const processFile = (file) => {
  var reader = new FileReader();
  reader.onload = function () {
    console.log(reader.result);
  };
  reader.readAsText(file, "utf-8");
};

export const MenuBox = () => {
  const router = useRouter();
  const ImportInputRef = useRef<HTMLInputElement>(null);
  const userData = useRecoilValue(userDataState);
  const onClickImport: ChangeEventHandler<HTMLInputElement> = (e) => {
    // 파일 이름 체크
    if (!e.target.value.includes("spacechat_")) return alert("잘못된 파일입니다. 불러올 수 없습니다.");
    if (!e.target.files) return alert("불러올 파일이 선택되지 않았습니다. 다시 선택해주세요.");
    if (e.target.files.length !== 1) return alert("파일은 최대 1개만 선택할 수 있습니다.");
    processFile(e.target.files[0]);
    e.target.value = "";
  };
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
          <ButtonBase
            style={{ borderRadius: 8, padding: 4, margin: 4, flexDirection: "column", flex: 1 }}
            onClick={() => router.push("#name")}
          >
            <img src="/icons/option/changeNickname.svg" />
            <p className="txt">이름{userData.name ? "변경" : "생성"}</p>
          </ButtonBase>
          <ButtonBase
            style={{ borderRadius: 8, padding: 4, margin: 4, flexDirection: "column", flex: 1 }}
            onClick={() => router.push("#export")}
          >
            <img src="/icons/option/expertChat.svg" />
            <p className="txt">채팅 내보내기</p>
          </ButtonBase>
          <ButtonBase
            style={{ borderRadius: 8, padding: 4, margin: 4, flexDirection: "column", flex: 1 }}
            onClick={() => ImportInputRef.current?.click()}
          >
            <img src="/icons/option/importChat.svg" />
            <p className="txt">채팅 불러오기</p>
            <input
              type="file"
              accept="text/plain"
              ref={ImportInputRef}
              onChange={onClickImport}
              style={{ display: "none" }}
            />
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
