import Container from "@mui/material/Container";
import { ChatHeader } from "../../components/pages/chat/ChatHeader";
import { ChatList } from "../../components/pages/chat/ChatList";
import { FileInputBox, InputBox } from "../../components/pages/chat/Input";

export default function Page() {
  return (
    <>
      <Container maxWidth="md" style={{ padding: 0, background: "#1A1D2C" }}>
        <div style={{ display: "flex", flexDirection: "column", maxHeight: "100vh" }}>
          <ChatHeader />
          <ChatList />
          <FileInputBox />
          <InputBox />
        </div>
      </Container>
    </>
  );
}
