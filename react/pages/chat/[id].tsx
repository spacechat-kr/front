import Container from "@mui/material/Container";
import { ChatHeader } from "../../components/pages/chat/ChatHeader";
import { ChatList } from "../../components/pages/chat/ChatList";
import { ChatModal } from "../../components/pages/chat/ChatModal";
import { FileInputBox, InputBox } from "../../components/pages/chat/Input";
import { SocketListner } from "../../components/pages/chat/SocketListner";

export default function Page() {
  return (
    <>
      <Container maxWidth="md" style={{ padding: 0, background: "#1A1D2C" }}>
        <ChatHeader />
        <div style={{ display: "flex", flexDirection: "column", maxHeight: "100vh" }}>
          <ChatList />
          <FileInputBox />
          <InputBox />
          <ChatModal />
        </div>
        <SocketListner />
      </Container>
    </>
  );
}
