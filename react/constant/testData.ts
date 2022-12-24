export const metadata = {
  user_id: "asd",
  device_id: "asd",
  chatList: Array.from({ length: 500 }).map((item: any, i) => {
    return {
      post_id: 1,
      messageList: Array.from({ length: 2300 }).map((item2: any, j) => {
        return {
          chat_id: 1,
          message: "안녕하세요!! 😀. 😃. 😄. 😁. 😆. 😅. 🤣. 😂. 🙂. 🙃. 😉. 😊. 😇.",
          created_at: "2022-12-26T07:37:29.213Z",
        };
      }),
    };
  }),
};
