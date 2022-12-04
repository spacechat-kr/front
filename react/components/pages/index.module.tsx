import { ButtonBase } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import { Settings } from "@mui/icons-material";
import { useRouter } from "next/router";

const HomeHeightState = atom<number>({ key: "HomeHeightState", default: 1000 });
export const HomeHeader = () => {
	const router = useRouter();
  const [height, setHeight] = useRecoilState(HomeHeightState);
  const [isOpen, setIsOpen] = useState(false);
	const headerRef = useRef<HTMLDivElement>(null);
	
  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current) setHeight(Math.max(headerRef.current.clientHeight - 305.88, 0));
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
	}, []);
	
	const onClickChat = () => router.push('/list/chat')
	const onClickSetting = () => router.push('/option/home');

  return (
    <header
      ref={headerRef}
      style={{
        zIndex: 1,
        position: "absolute",
        width: "100%",
        maxWidth: 900,
        overflow: "hidden",
        top: isOpen ? -height : -height - 150,
        transition: "opacity 0.3s, top 0.2s",
        opacity: height === 1000 ? 0 : 1,
      }}
    >
      <div
        style={{
          // height: 100,
          // background: "orange",
          zIndex: 10,
          width: "100%",
          maxWidth: 900,
          position: "fixed",
          top: 0,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <ButtonBase style={{ borderRadius: 8, padding: 4, margin: 16 }} onClick={onClickChat}>
            <SmsRoundedIcon style={{ fontSize: 33, transform: "scaleX(-1)", color: "#CEC2FF" }} />
          </ButtonBase>
        </div>
        <div>
          <ButtonBase style={{ borderRadius: 8, padding: 4, margin: 16 }} onClick={onClickSetting}>
            <Settings style={{ fontSize: 33, color: "#CEC2FF" }} />
          </ButtonBase>
        </div>
      </div>
      <img src="/images/header_background.svg" width="100%" />

      {height > 0 && (
        <div
          style={{
            position: "fixed",
            top: !isOpen ? 100 : 268,
            left: "calc(50% - 18.5px)",
            transform: isOpen ? undefined : "scaleY(-1)",
            transition: "top 0.2s",
          }}
        >
          <ButtonBase style={{ borderRadius: 8, padding: 4 }} onClick={() => setIsOpen((prev) => !prev)}>
            <img src="/icons/homeDown.svg" />
          </ButtonBase>
        </div>
      )}
    </header>
  );
};
