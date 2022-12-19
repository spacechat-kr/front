import Container from "@mui/material/Container";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { BackHeader, ChatCard } from "../../components/pages/list/chat.module";
import { NoChatList } from "../../components/pages/option/NoChatList";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";

require("dayjs/locale/ko");
dayjs.locale("ko");
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

// 1시간 이내 방금전 / ~분전
// 1일 이내 시간표시
// 1년 이내 날짜표시
// 년월일표시
export const ExampleChatList = Array.from({ length: 50 }).map((a, i) => {
  return {
    index: i,
    key: i,
    name: "name" + i,
    message: "안녕하세요" + i,
    created_at: dayjs().subtract(i, "hour").fromNow(),
  };
});
export default function Page() {
  const router = useRouter();
  return (
    <>
      <Container maxWidth="md" style={{ padding: 0 }}>
        <BackHeader />
        <div style={{ background: "white", height: "calc(100vh)", paddingTop: 60 }}>
          {ExampleChatList.length === 0 ? (
            <NoChatList />
          ) : (
            ExampleChatList.map((i) => {
              return (
                <ChatCard
                  key={i.key}
                  name={i.name}
                  message={i.message}
                  time={i.created_at}
                  onClick={() => router.push(`/chat/${i.key}`)}
                />
              );
            })
          )}
        </div>
      </Container>
    </>
  );
}
