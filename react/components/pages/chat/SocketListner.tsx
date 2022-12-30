import { Button } from "@mui/material";
import { useEffect, useState } from "react";
export let ws: WebSocket | null = null;
/**
 * https://jcon.tistory.com/186
 * @connect socket.connect(): 소켓 연결.
 * @emit socket.emit("이벤트 명", Data): 이벤트 명을 지정하고 데이터를 보냄.
 * @on socket.on("이벤트 명", 콜백 함수): 해당 이벤트를 받고 콜백함수를 실행.
 * @disconnet socket.disconnect(): 소켓 연결을 끊음.
 */
export const SocketListner = () => {
  const [socketConnected, setSocketConnected] = useState(false);
  // const [sendMsg, setSendMsg] = useState(false);
  // const [items, setItems] = useState<any>([]);
  const webSocketUrl = `ws://3.113.100.47:8080/ws/chat`;

  // 소켓 객체 생성
  useEffect(() => {
    if (!ws) {
      ws = new WebSocket(webSocketUrl);
      console.log("open");
      ws.onopen = () => {
        console.log("connected to " + webSocketUrl);
        setSocketConnected(true);
      };
      ws.onclose = (error) => {
        console.log("disconnect from " + webSocketUrl);
        console.log(error);
      };
      ws.onerror = (error) => {
        console.log("connection error " + webSocketUrl);
        console.log(error);
      };
      ws.onmessage = (evt) => {
        // const data = JSON.parse(evt.data);
        console.log(evt.data);
        // setItems((prevItems) => [...prevItems, data]);
      };
    }

    return () => {
      console.log("clean up");
      if (socketConnected && ws) ws.close();
    };
  }, []);

  // 소켓이 연결되었을 시에 send 메소드
  // useEffect(() => {
  //   if (socketConnected) {
  //     ws.send(
  //       JSON.stringify({
  //         roomId: "12",
  //         message: "1",
  //       })
  //     );
  //     setSendMsg(true);
  //   }
  // }, [socketConnected]);
  return (
    <></>
    // <div style={{ position: "fixed", top: 0, left: 0 }}>
    //   <Button
    //     onClick={() => {
    //       ws.send(
    //         JSON.stringify({
    //           roomId: "20",
    //           message: "af",
    //         })
    //       );
    //     }}
    //   >
    //     보내기
    //   </Button>
    // </div>
  );
};
