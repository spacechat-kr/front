import { useState } from "react";
import { ButtonBase } from "@mui/material";
import Container from "@mui/material/Container";
import { useRecoilState, useSetRecoilState } from "recoil";
import Map from "../components/Map";
import { HomeHeader, IsHideHomeHeaderState } from "../components/pages/index.module";

export default function Page() {
  return (
    <>
      <Container maxWidth="md" style={{ padding: 0 }}>
        <HomeHeader />
        <Map />
        <MapNavigation />
      </Container>
    </>
  );
}

const MapNavigation = () => {
  const setIsHide = useSetRecoilState(IsHideHomeHeaderState);
  const [isWrite, setIsWrite] = useState(false);
  const onWrite = () => {
    setIsHide((prev) => !prev);
    setIsWrite((prev) => !prev);
  };
  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: isWrite ? "calc(100vw - 24px)" : 104,
        transition: "right cubic-bezier(0.000, 1.100, 0.365, 0.945) 0.4s",
        width: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <ButtonBase sx={{ borderRadius: 100 }} onClick={onWrite}>
          <img src="/icons/mapWrite.png" style={{ margin: "8px 8px 8px 0" }} />
        </ButtonBase>
        <p
          style={{
            background: "white",
            color: "black",
            whiteSpace: "nowrap",
            height: "1em",
            // width: 1400,
            // overflow: "hidden",
          }}
        >
          쪽지를 놓을 곳을 선택해주세요
        </p>
      </div>
    </div>
  );
};
