import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { atom, useRecoilState } from "recoil";

const OptionHeightState = atom<number>({ key: "OptionHeightState", default: 1000 });
export const OptionHeader = () => {
  const router = useRouter();
  const [height, setHeight] = useRecoilState(OptionHeightState);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current) setHeight(Math.max(headerRef.current.clientHeight - 305.88, 0));
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      ref={headerRef}
      style={{
        // zIndex: 1,
        position: "absolute",
        width: "100%",
        maxWidth: 900,
        overflow: "hidden",
        top: -height,
        transition: "opacity 0.3s, top 0.2s",
        opacity: height === 1000 ? 0 : 1,
      }}
    >
      <div
        style={{
          zIndex: 10,
          width: "100%",
          maxWidth: 900,
          position: "fixed",
          top: 0,
          display: "flex",
          justifyContent: "space-between",
          height: 60,
          alignItems: "center",
        }}
      >
        <div>
          <ButtonBase sx={{ ml: 1.5, borderRadius: 4, padding: 1 }}>
            <ArrowBackIosNewRounded style={{ fontSize: 28, color: "#CEC2FF" }} onClick={router.back} />
          </ButtonBase>
          {/* <ButtonBase style={{ borderRadius: 8, padding: 4, margin: 16 }} onClick={router.back}>
            <ArrowBackIosNewRounded style={{ fontSize: 33, color: "#CEC2FF" }} />
          </ButtonBase> */}
        </div>
        <div>
          {/* <ButtonBase style={{ borderRadius: 8, padding: 4, margin: 16 }} onClick={onClickSetting}>
              <Settings style={{ fontSize: 33, color: "#CEC2FF" }} />
            </ButtonBase> */}
        </div>
      </div>
      <img src="/images/header_background.svg" width="100%" />
    </header>
  );
};
