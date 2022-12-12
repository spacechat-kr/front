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

// https://levelup.gitconnected.com/how-to-use-google-maps-react-57ba97ca897b 현재위치가져오기
// yarn add google-maps-react-markers
// React-google map current location
const MapNavigation = () => {
  const setIsHide = useSetRecoilState(IsHideHomeHeaderState);
  const [isWrite, setIsWrite] = useState(false);
  const onWrite = () => {
    setIsHide((prev) => !prev);
    setIsWrite((prev) => !prev);
  };
  return (
    <div>
      {/* <div
        style={{
          position: "fixed",
          height: "100%",
          top: 0,
          width: "100vw",
          maxWidth: 900,
        }}
      ></div> */}
      <BottomWriteButton isWrite={isWrite} onWrite={onWrite} />
    </div>
  );
};

const BottomWriteButton = ({ isWrite, onWrite }: { isWrite: boolean; onWrite: () => void }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        width: "100vw",
        maxWidth: 900,
        display: "flex",
        justifyContent: "right",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          right: isWrite ? "50%" : "4%",
          transform: isWrite ? "translate(50%, 0)" : "translate(0, 0)",
          transition:
            "right cubic-bezier(0.000, 1.100, 0.365, 0.945) 0.4s, transform cubic-bezier(0.000, 1.100, 0.365, 0.945) 0.4s",
        }}
      >
        <ButtonBase sx={{ borderRadius: 100 }} onClick={onWrite}>
          <img src="/icons/mapWrite.png" style={{ margin: "8px 8px 8px 0" }} />
        </ButtonBase>
        <div
          style={{
            width: isWrite ? 243 : 0,
            whiteSpace: "nowrap",
            overflow: "hidden",
            position: "relative",
            transition: "width cubic-bezier(0.000, 1.100, 0.365, 0.945) 0.4s",
            right: 20,
            zIndex: -1,
          }}
        >
          <p
            style={{
              padding: "10px 16px",
              borderRadius: isWrite ? 25 : 8,
              transition: "border-radius cubic-bezier(0.000, 1.100, 0.365, 0.945) 0.4s",
              background: "white",
              color: "black",
              fontWeight: 500,
              fontSize: 18,
              lineHeight: "26px",
              letterSpacing: "-0.4px",
            }}
          >
            쪽지를 놓을 곳을 선택해주세요
          </p>
        </div>
      </div>
    </div>
  );
};
