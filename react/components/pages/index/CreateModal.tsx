import { Box, ButtonBase, FormControl, FormHelperText, Input, TextareaAutosize } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ax } from "../../../pages/_app";
import { getDistance } from "../../Map/getDistance";
import { CenterState } from "../../Map/Map";
import { mapInstance, markerListState, markerListStateSelector } from "../../Map/MapContainer";
import { IsHideHomeHeaderState, userDataState } from "./HomeHeader";
import { IsWriteState } from "./MapNavigation";

let remainType = "none";
export const CreateModal = () => {
  const router = useRouter();
  const userData = useRecoilValue(userDataState);
  const center = useRecoilValue(CenterState);
  const [postId, setPostId] = useState("");
  const marker = useRecoilValue(markerListStateSelector(postId));
  const [type, setType] = useState<"write" | "create" | "none">("none");
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
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
    //#region type Check
    const p = router.asPath;
    if (!p.includes("#") && ["write", "create", "none", "enter"].includes(type)) remainType = type;
    const aftertype = p.slice(p.indexOf("#") + 1, p.indexOf("?") === -1 ? p.length : p.indexOf("?")) as any;
    setType(["write", "create", "none", "enter"].includes(aftertype) ? aftertype : "none");
    if (["write", "create"].includes(aftertype)) onWrite();
    // else onWriteLeave();

    // 쪽지를 놓을 이름이 필요합니다.
    if (!userData.name && aftertype === "create") router.push("/option#name");
    //#endregion
    //#region #enter일 경우 postId 가져옴
    if (aftertype === "enter") {
      const postId = p.includes("postId=") ? p.slice(p.indexOf("=") + 1, p.length) : null;
      if (postId) setPostId(postId);
      else alert("잘못된 접근경로입니다.");
    }

    //#endregion
  }, [router]);

  const modalType = type != "none" ? type : remainType;
  if (modalType === "write" || (modalType === "enter" && (!postId || !marker))) return <></>;

  const ModalList = {
    create: {
      imgSrc: "/icons/modalCreate.png",
      confirmText: "여기에 쪽지 놓기",
      cancelText: "다른 곳에 쪽지 놓기",
      onClickConfirm: () => {
        if (!titleRef.current || !descRef.current) return alert("새로고침 후 다시 시도해주세요.");
        if (titleRef.current.value.length > 20) return alert("쪽지 타이틀은 20자 제한입니다.");
        const { lat, lng } = { lat: mapInstance?.getCenter()?.lat(), lng: mapInstance?.getCenter()?.lng() };
        if (!lat || !lng) return alert("위/경도가 올바르지 않습니다. 새로고침 후 다시 시도해주세요.");
        const distance = getDistance(center, { lat, lng });
        if (distance >= 3) return alert("쪽지 놓기는 내 주변 3km로 제한되어 있습니다.");

        ax.post(`/post/create`, {
          userId: userData.uuid,
          title: titleRef.current.value,
          description: descRef.current.value ? descRef.current.value : "",
          latitude: lat,
          longitude: lng,
          iconPath: "https://www.spacechat.kr/icons/modalCreate.png",
        })
          .then(({ data }) => {
            if (data.code === "200") {
              setTimeout(() => {
                if (titleRef.current) titleRef.current.value = titleRef.current.defaultValue;
                if (descRef.current) descRef.current.value = descRef.current.defaultValue;
              }, 1000);
              onWriteLeave();
              router.back();
            } else throw Error;
          })
          .catch((e) =>
            alert(
              "데이터 전송 중 오류가 발생했습니다. 재시도에도 계속해서 문제가 발생한다면 홈 > 설정 > 문의하기를 이용해주세요."
            )
          );
      },
      onClickCancel: router.back,
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
                defaultValue={userData.name ? `${userData.name.slice(0, 15)}님의 쪽지` : ""}
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
                <div id="titleLength">{userData.name ? `${userData.name.slice(0, 15)}님의 쪽지`.length : 0}/20</div>
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
      onClickConfirm: () => {
        ax.post(`/chatRoom/create`, {
          joinerId: userData.uuid,
          postId: postId,
        })
          .then(({ data }) => {
            if (data.code === "200") {
              const res: {
                chatRoomId: string; //"5a2970d4-7ab4-4ae5-b411-ca8ba65ff010";
                createdAt: string; //"2022-12-30T22:13:43";
                joinerId: string; //"2bfd6570-da54-fd08-f952-3b053cdd5121";
                postId: string; //"c10e26cd-fe43-4f64-9a86-9a8953d35ad0";
              } = data.data;
              if (res.chatRoomId) router.replace(`/chat/${res.chatRoomId}`);
              else throw Error;
            } else throw Error;
          })
          .catch((e) =>
            alert(
              "네트워크 오류가 발생했습니다. 재시도에도 계속해서 문제가 발생한다면 홈 > 설정 > 문의하기를 이용해주세요."
            )
          );
      },
      onClickCancel: router.back,
      content: () => (
        <>
          {marker?.title}
          <br />
          {marker?.description}
          <br />
        </>
      ),
    },
    out: {
      imgSrc: "/icons/modalAlert.svg",
      confirmText: "확인",
      onClickConfirm: () => {},
      onClickCancel: router.back,
      content: () => (
        <>
          내 위치 3km 이내에만
          <br />
          쪽지를 놓을 수 있어요!
        </>
      ),
    },
    write: {
      imgSrc: "",
      cancelText: "",
      onClickConfirm: () => {},
      onClickCancel: router.back,
      content: () => <div></div>,
    },
    none: {
      imgSrc: "",
      cancelText: "",
      onClickConfirm: () => {},
      onClickCancel: () => {},
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
        <ButtonBase id="confirm" onClick={ModalList[modalType].onClickConfirm}>
          {ModalList[modalType].confirmText}
        </ButtonBase>
        <ButtonBase id="cancel" onClick={ModalList[modalType].onClickCancel}>
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
