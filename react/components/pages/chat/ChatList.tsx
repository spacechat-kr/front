import { Box } from "@mui/material";
import dayjs from "dayjs";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { userDataState } from "../index/HomeHeader";

export type ChatType = {
  createdAt: string;
  message: string;
  type: "text" | "picture" | "video" | "file" | "notice";
  deviceId: string;
};
export const ChatListState = atom<ChatType[]>({
  key: "ChatListState",
  default: [],
});
export const ChatList = () => {
  const userData = useRecoilValue(userDataState);
  const [chatList, setChatList] = useRecoilState(ChatListState);

  // useEffect(() => {
  //   setChatList(ChatListTest);
  // }, []);
  return (
    <div style={{ overflowY: "scroll", flex: 1, marginTop: "60px" }} id="chatList">
      <Box
        sx={{
          minHeight: "calc(100vh - 112px)",
          ".notice": {
            pr: "20px",
            pl: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            m: "16px 0 16px 0",
            color: "#00BBBC",
            fontFamily: "AppleSDGothicNeo",
            fontWeight: 300,
            fontSize: 15,
            letterSpacing: "-0.4px",
            lineHeight: "22px",
          },
          ".my": {
            pr: "20px",
            pl: "20px",
            display: "flex",
            alignItems: "end",
            justifyContent: "end",
            mb: 1,
          },
          ".you": {
            pr: "20px",
            pl: "20px",
            display: "flex",
            alignItems: "end",
            justifyContent: "start",
            mb: 1,
            flexDirection: "row-reverse",
          },
          ".message": {
            fontFamily: "AppleSDGothicNeo",
            fontWeight: 400,
            fontSize: 15,
            lineHeight: "26px",
            letterSpacing: "-0.4px",
            borderRadius: "8px",
            padding: "4px 10px",
            maxWidth: "80vw",
            overflowWrap: "break-word",
            whiteSpace: "break-spaces",
          },
          ".my .message": {
            color: "#0A6061",
            background: "#D4FFFF",
          },
          ".you .message": {
            color: "#FFFFFF",
            background: "#00BBBC",
          },
          ".time": {
            fontFamily: "AppleSDGothicNeo",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "22px",
            letterSpacing: "-0.4px",

            mb: "0px",
            whiteSpace: "nowrap",
          },
          ".my .time": {
            color: "#D4FFFF",
            mr: 1,
          },
          ".you .time": {
            color: "#00BBBC",
            ml: 1,
          },
        }}
      >
        {chatList.map((item, i, arr) => {
          if (item.type === "notice")
            return (
              <div key={i} className={"notice"}>
                {item.message}
              </div>
            );
          // ?????? ??????,?????? ?????????????????? ????????? ???????????? ??????.
          const isTime =
            arr.length > i + 1
              ? arr[i + 1].createdAt.slice(0, 16) != item.createdAt.slice(0, 16) || arr[i + 1].deviceId != item.deviceId
              : true;
          // ????????? ?????? ?????? ?????? ?????? ??? ??????
          const isNextSamePerson = arr.length > i + 1 ? arr[i + 1].deviceId == item.deviceId : true;
          return (
            <div
              key={i}
              className={item.deviceId === userData.uuid ? "my" : "you"}
              style={{ marginBottom: isNextSamePerson ? 12 : 20 }}
            >
              {isTime && <div className="time">{dayjs(item.createdAt).format("hh:mm A")}</div>}
              <div className="message">{item.message}</div>
            </div>
          );
        })}
      </Box>
    </div>
  );
};
