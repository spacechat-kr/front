// https://levelup.gitconnected.com/how-to-use-google-maps-react-57ba97ca897b 현재위치가져오기
// yarn add google-maps-react-markers

import { ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import { atom, useSetRecoilState, useRecoilState } from "recoil";
import { IsHideHomeHeaderState } from "./HomeHeader";

// React-google map current location
export const IsWriteState = atom<boolean>({ key: "IsWriteState", default: false });
export const MapNavigation = () => {
  const setIsHide = useSetRecoilState(IsHideHomeHeaderState);
  const [isWrite, setIsWrite] = useRecoilState(IsWriteState);
  const router = useRouter();
  const onWrite = () => {
    setIsHide((prev) => !prev);
    setIsWrite((prev) => !prev);
  };
  return (
    <div>
      <div
        style={{
          position: "fixed",
          height: "100%",
          top: 0,
          width: "100vw",
          maxWidth: 900,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none",
          opacity: isWrite ? 1 : 0,
          transition: "opacity 0.1s",
          flexDirection: "column",
        }}
      >
        <img src="/icons/map/myLetter.svg" width={60} />

        <div style={{ marginTop: 16, height: 0, pointerEvents: "fill" }}>
          <ButtonBase
            style={{ background: "gray", padding: 8, borderRadius: 8, color: "white", fontSize: 16 }}
            onClick={() => {
              router.push("#create");
            }}
          >
            여기에 놓기(임시)
          </ButtonBase>
        </div>
      </div>

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
          transform: `translateX(${isWrite ? "50%" : "0"})`,
          transition: "right 0.4s, transform 0.4s",
        }}
      >
        <ButtonBase sx={{ borderRadius: 100 }} onClick={onWrite}>
          <img src="/icons/mapWrite4x.png" style={{ margin: "8px 8px 8px 0" }} width="87px" />
        </ButtonBase>
        <div
          style={{
            width: isWrite ? 243 : 0,
            whiteSpace: "nowrap",
            overflow: "hidden",
            position: "relative",
            transition: "width 0.4s",
            right: 20,
            zIndex: -1,
          }}
        >
          <p
            style={{
              padding: "10px 16px 10px 20px",
              borderRadius: isWrite ? 25 : 8,
              transition: "border-radius 0.4s",
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
