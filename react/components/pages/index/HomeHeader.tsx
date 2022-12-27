import { ButtonBase } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { atom, useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import { Settings } from "@mui/icons-material";
import { useRouter } from "next/router";
import { localStorageEffect } from "../../../constant/hook/localStorageEffect";
import uuid from "react-uuid";
import { ax } from "../../../pages/_app";

const HomeHeightState = atom<number>({ key: "HomeHeightState", default: 1000 });
export const IsHomeHeaderState = atom<boolean>({ key: "IsHomeHeaderState", default: false });
export const IsHideHomeHeaderState = atom<boolean>({ key: "IsHideHomeHeaderState", default: false });
export const userDataState = atom<{ uuid: string; name: string | null }>({
  key: "userDataState",
  default: { uuid: uuid(), name: null },
  effects_UNSTABLE: [localStorageEffect("/cache/userDataState")],
});

export const HomeHeader = () => {
  const router = useRouter();
  const [height, setHeight] = useRecoilState(HomeHeightState);
  const [isOpen, setIsOpen] = useRecoilState(IsHomeHeaderState);
  const isHide = useRecoilValue(IsHideHomeHeaderState);
  const headerRef = useRef<HTMLDivElement>(null);
  const userData = useRecoilValue(userDataState);
  const [name, setName] = useState<string | null>();
  useEffect(() => {
    const handleResize = () =>
      headerRef.current ? setHeight(Math.max(headerRef.current.clientHeight - 305.88, 0)) : null;
    window.addEventListener("resize", handleResize);
    handleResize();
    if (userData.name) setName(userData.name);
    else setName(null);
    return () => window.removeEventListener("resize", handleResize);
  }, [router]);
  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [router]);

  const onClickChat = () => router.push("/list/chat");
  const onClickSetting = () => router.push("/option");

  return (
    <header
      ref={headerRef}
      style={{
        zIndex: 1,
        position: "absolute",
        width: "100%",
        maxWidth: 900,
        overflow: "hidden",
        top: isOpen ? -height : -height - 200,
        visibility: isHide ? "hidden" : "visible",
        transition: "opacity 0.3s, top 0.2s, visibility 0.3s",
        opacity: height === 1000 || isHide ? 0 : 1,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 900,
          position: "fixed",
          top: 0,
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transition: "visibility 0.2s, opacity 0.2s",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <ButtonBase sx={{ ml: 1.5, borderRadius: 4, padding: 1 }} onClick={onClickChat}>
            <SmsRoundedIcon style={{ fontSize: 33, transform: "scaleX(-1)", color: "#CEC2FF" }} />
          </ButtonBase>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 238,
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <img src="/icons/homeLogo.svg" style={{ marginBottom: 4 }} width={85} />
          <ButtonBase
            onClick={() => router.push("/option#name")}
            style={{
              fontWeight: 400,
              fontSize: 28,
              lineHeight: "41px",
              letterSpacing: "-0.4px",
              color: name ? "#e5e5e5" : "#e5e5e567",
              padding: "4px 16px",
              height: 50,
            }}
          >
            {name === undefined ? "" : name ? name : "Undefined"}
          </ButtonBase>
        </div>
        <div>
          <ButtonBase sx={{ mr: 1.5, borderRadius: 4, padding: 1 }} onClick={onClickSetting}>
            <Settings style={{ fontSize: 33, color: "#CEC2FF" }} />
          </ButtonBase>
        </div>
      </div>
      <img src="/images/header_background.svg" width="100%" />

      {height > 0 && (
        <div
          style={{
            position: "fixed",
            top: !isOpen ? 70 : 268,
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
