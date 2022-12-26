import { ButtonBase } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import { Settings } from "@mui/icons-material";
import { useRouter } from "next/router";
import { localStorageEffect } from "../../../constant/hook/localStorageEffect";
import uuid from "react-uuid";
import { ax } from "../../../pages/_app";

const HomeHeightState = atom<number>({ key: "HomeHeightState", default: 1000 });
export const IsHomeHeaderState = atom<boolean>({ key: "IsHomeHeaderState", default: false });
export const IsHideHomeHeaderState = atom<boolean>({ key: "IsHideHomeHeaderState", default: false });
const userDataState = atom<{ uuid: string; name: string | null }>({
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
  const [userData, setUserData] = useRecoilState(userDataState);
  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current) setHeight(Math.max(headerRef.current.clientHeight - 305.88, 0));
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        transition: "opacity 0.3s, top 0.2s",
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
        <div>
          <input
            defaultValue={userData.name ? userData.name : undefined}
            placeholder="이름을 정해주세요."
            onBlur={(e) => {
              const name = e.target.value;
              const isChange = confirm(`${name}로 이름을 변경하시겠습니까?`);
              if (isChange) {
                setUserData((prev) => {
                  return { ...prev, name: name };
                });
                if (!userData.name) ax.post(`/user/create`, { name, userId: userData.uuid });
                else ax.post(`/user/update`, { name, userId: userData.uuid });
              } else {
                e.target.value = userData.name ? userData.name : "";
              }
            }}
          ></input>
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
