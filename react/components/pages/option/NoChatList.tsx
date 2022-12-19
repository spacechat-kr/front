import { ButtonBase } from "@mui/material";
import { useRouter } from "next/router";

export const NoChatList = () => {
  const router = useRouter();

  return (
    <div
      style={{
        paddingTop: 148,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "AppleSDGothicNeo",
        fontWeight: 400,
        fontSize: 20,
        lineHeight: "29px",
        textAlign: "center",
        letterSpacing: "-0.4px",
      }}
    >
      <img src="/icons/mapWrite4x.png" style={{ marginBottom: 28 }} width="87px" />
      개설된 채팅방이 없습니다.
      <br />
      <br />
      채팅방을 만들고
      <br /> 다른 사람들과 이야기해보세요!
      <ButtonBase
        onClick={() => router.push("/#write")}
        style={{
          fontFamily: "AppleSDGothicNeo",
          background: "linear-gradient(90deg, #501788 4.55%, #724CC0 90.68%)",
          marginTop: 49,
          color: "white",
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "-0.4px",
          borderRadius: 20,
          width: 220,
          height: 39,
        }}
      >
        채팅방 만들기
      </ButtonBase>
    </div>
  );
};
