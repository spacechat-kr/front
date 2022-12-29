import { Box, ButtonBase, FormControl, FormHelperText, Input, TextareaAutosize } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IsHideHomeHeaderState, userDataState } from "./HomeHeader";
import { IsWriteState } from "./MapNavigation";

let remainType = "none";
export const CreateModal = () => {
  const router = useRouter();
  const [type, setType] = useState<"write" | "create" | "none">("none");
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const userData = useRecoilValue(userDataState);

  const setIsHide = useSetRecoilState(IsHideHomeHeaderState);
  const setIsWrite = useSetRecoilState(IsWriteState);
  const onWrite = () => {
    setIsHide(true);
    setIsWrite(true);
  };
  const onWriteLeave = () => {
    setIsHide(false);
    setIsWrite(false);
  };

  useEffect(() => {
    if (!router.asPath.includes("#") && ["write", "create", "none"].includes(type)) remainType = type;
    const aftertype = router.asPath.split("#")[1] as any;
    setType(aftertype ? aftertype : "none");
    if (["write", "create"].includes(aftertype)) onWrite();
    // else onWriteLeave();

    // 쪽지를 놓을 이름이 필요합니다.
    if (!userData.name && aftertype === "create") router.push("/option#name");
  }, [router]);

  const modalType = type != "none" ? type : remainType;
  if (modalType === "write") return <></>;

  const ModalList = {
    create: {
      imgSrc: "/icons/modalCreate.png",
      confirmText: "여기에 쪽지 놓기",
      cancelText: "다른 곳에 쪽지 놓기",
      content: (titleRef, descRef) => {
        return (
          <Box
            sx={{
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.25)",
              borderRadius: "19px",
              padding: "8px 16px",
              overflow: "hidden",
              "input::placeholder": {
                fontSize: 16.4,
              },
              width: 300,
              display: "flex",
              flexDirection: "column",
              "textarea:focus": {
                // outline: "none",
                outline: "#00000039 0.5px solid !important",
              },
            }}
          >
            <FormControl variant="standard" sx={{ m: "8px 8px 0 8px", mt: 2 }}>
              <Input
                inputRef={titleRef}
                onFocus={(ref) => ref.target.setAttribute("maxLength", "20")}
                defaultValue={userData.name ? `${userData.name}님의 채팅방` : ""}
                onLoadedData={(r) => console.log(r)}
                onChange={(r) => {
                  const len = document.getElementById("titleLength");
                  if (len) {
                    len.innerText = `${r.target.value.length}/20`;
                    if (r.target.value.length === 0 || r.target.value.length > 20) len.style.color = "red";
                    else len.style.color = "#00000099";
                  }
                }}
                style={InputTitleStyle}
                placeholder="머릿말을 입력해주세요(필수)"
                maxRows={1}
              />
              <FormHelperText component={"div"} style={{ display: "flex", justifyContent: "space-between" }}>
                <div> </div>
                <div id="titleLength">{userData.name ? `${userData.name.slice(0, 14)}님의 쪽지`.length : 0}/20</div>
              </FormHelperText>
            </FormControl>
            <FormControl variant="standard" sx={{ m: "0 0" }}>
              <TextareaAutosize
                style={InputDescStyle}
                ref={descRef}
                maxLength={200}
                placeholder={"쪽지내용을 입력해주세요(선택)"}
                onChange={(r) => {
                  const len = document.getElementById("descLength");
                  if (len) {
                    len.innerText = `${r.target.value.length}/200`;
                    if (r.target.value.length > 200) len.style.color = "red";
                    else len.style.color = "#00000099";
                  }
                }}
              />
              <FormHelperText component={"div"} style={{ display: "flex", justifyContent: "space-between" }}>
                <div> </div>
                <div id="descLength">0/200</div>
              </FormHelperText>
            </FormControl>
          </Box>
        );
      },
    },
    enter: {
      imgSrc: "/icons/modalCreate.png",
      confirmText: "참여하기",
      cancelText: "취소",
      content: () => (
        <>
          채팅방뫄뫄
          <br />
          제발들어와주세요... <br />
          제발들어와주세요... <br />
          제발들어와주세요...
        </>
      ),
    },
    out: {
      imgSrc: "/icons/modalAlert.svg",
      confirmText: "확인",
      content: () => (
        <>
          내 위치 3km 이내에만
          <br />
          쪽지를 놓을 수 있어요!
        </>
      ),
    },
    write: {
      cancelText: "",
      content: () => <div></div>,
    },
    none: {
      cancelText: "",
      content: () => null,
    },
  };

  return (
    <>
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
          width: "100vw",
          maxWidth: 900,
          height: "100vh",
          position: "fixed",
          opacity: type !== "none" ? 1 : 0,
          visibility: type !== "none" ? "visible" : "hidden",
          // transition: "visibility ease-in 0.1s, opacity ease-in 0.1s",
          zIndex: 1301,
        }}
        onClick={() => router.back()}
      ></div>
      <Box
        sx={{
          position: "fixed",
          fontFamily: "AppleSDGothicNeo",
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "29px",
          textAlign: "center",
          letterSpacing: "-0.4px",
          color: "black",
          background: "white",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: 300,
          zIndex: 1302,
          padding: "20px 28px 8px 28px",
          span: {
            color: "#E65555",
            fontWeight: 700,
          },
          borderRadius: "10px",
          opacity: type !== "none" ? 1 : 0,
          visibility: type !== "none" ? "visible" : "hidden",
          // transition: "visibility ease-in 0.1s, opacity ease-in 0.1s",
          display: "flex",
          flexDirection: "column",
          button: {
            borderRadius: "20px",
            padding: 1,
          },
          "#confirm": {
            fontFamily: "AppleSDGothicNeo",
            background: "linear-gradient(90deg, #501788 4.55%, #724CC0 90.68%)",
            marginTop: 2,
            color: "white",
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.4px",
          },
          "#cancel": {
            marginTop: 1,
            fontFamily: "AppleSDGothicNeo",
            fontSize: 13,
            color: "#551E8F",
            lineHeight: "20px",
            letterSpacing: "-0.4px",
          },
        }}
      >
        <div style={{ height: 45, position: "relative", top: -85 }}>
          <img
            src={ModalList[modalType].imgSrc}
            width="130px"
            style={{ background: "white", border: "10px solid white", borderRadius: 100 }}
          />
        </div>
        {ModalList[modalType].content(titleRef, descRef)}
        <ButtonBase
          id="confirm"
          onClick={() => {
            setTimeout(() => {
              if (titleRef.current) titleRef.current.value = titleRef.current.defaultValue;
              if (descRef.current) descRef.current.value = descRef.current.defaultValue;
            }, 1000);
            onWriteLeave();
            router.back();
          }}
        >
          {ModalList[modalType].confirmText}
        </ButtonBase>
        <ButtonBase id="cancel" onClick={() => router.back()}>
          {ModalList[modalType].cancelText}
        </ButtonBase>
      </Box>
    </>
  );
};

export const InputTitleStyle = {
  fontFamily: "AppleSDGothicNeo",
  fontWeight: 400,
  fontSize: 15,
  lineHeight: "22px",
  letterSpacing: "-0.4px",
  border: "none",
  padding: "0",
  outline: "none",
  ":placeholder": {
    fontWeight: 700,
    fontSize: 25,
  },
};
const InputDescStyle = {
  fontFamily: "AppleSDGothicNeo",
  fontWeight: 400,
  fontSize: 15,
  lineHeight: "22px",
  letterSpacing: "-0.4px",
  border: "none",
  paddingLeft: 10,
  paddingRight: 10,
  borderRadius: 2,
  minHeight: "10vh",
  maxHeight: "40vh",
  overflow: "scroll",
};
