import { ArrowForwardIosRounded } from "@mui/icons-material";
import { ButtonBase } from "@mui/material";
import { Box } from "@mui/system";
import { useRecoilValue } from "recoil";
import { userDataState } from "../index/HomeHeader";

export const MenuList = () => {
  const userData = useRecoilValue(userDataState);
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
          <ButtonBase
            className="button"
            onClick={() => {
              const title = `[Space-Chat CS-Questions]: (Write your user-report title here.)`;
              const body = `:: DeviceId :: ${userData.uuid}%0D%0A:: UserName :: ${userData.name} %0D%0A%0D%0A:: Content ::%0D%0A (Write your report content here.)`;
              window.open(`mailto:cs@spacechat.kr?subject=${title}&body=${body}`);
            }}
          >
            <p className="button">문의하기</p>
            <ArrowForwardIosRounded style={{ marginBottom: 2.3 }} />
          </ButtonBase>
        </Box>
      </div>
    </div>
  );
};
