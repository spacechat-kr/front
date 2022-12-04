import Container from "@mui/material/Container";
import { BackHeader, ChatCard } from "../../components/pages/list/chat.module";

// 1시간 이내 방금전 / ~분전
// 1일 이내 시간표시
// 1년 이내 날짜표시
// 년월일표시
export default function Page() {
  return (
    <>
      <Container maxWidth="md" style={{ padding: 0 }}>
        <BackHeader />
        <ChatCard
          name="채팅방뫄뫄"
          message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
          time="13:04 PM"
        />
        <ChatCard
          name="채팅방뫄뫄"
          message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
          time="01:04 AM"
        />
        <ChatCard
          name="채팅방뫄뫄"
          message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
          time="12/04"
        />
        <ChatCard
          name="채팅방뫄뫄"
          message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
          time="11/04"
        />
        <ChatCard
          name="채팅방뫄뫄"
          message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
          time="2022.11.04."
        />
        <ChatCard
          name="채팅방뫄뫄"
          message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
          time="2022.09.04"
        />
        <ChatCard
          name="채팅방뫄뫄"
          message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
          time="2021.01.04"
        />
        <ChatCard
          name="채팅방뫄뫄"
          message="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
          time="2020.11.04"
        />
      </Container>
    </>
  );
}
