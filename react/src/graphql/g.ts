import { listUsers } from "./queries";
import { API } from "aws-amplify";
import { LoginQuery, updateLoginedAtQuery, updateUserQuery } from "./customQueries";
import dayjs from "dayjs";
import { deleteUser as de, createUser as cu, createMessage as cm } from "./mutations";
import config from "../aws-exports";

API.configure(config);

//Time: 2022-10-08T08:53:59.676Z

//#region 유저관련
export const login = async (
  nickname: string,
  password: string
): Promise<{
  createdAt: string; //"2022-10-08T08:53:59.676Z";
  email: string | null; //"3";
  id: string; //"1";
  loginedAt: string; //"1";
  verifiedAt: string; //"1";
} | null> => {
  let filter = {
    nickname: {
      eq: nickname,
    },
    password: {
      eq: password,
    },
  };
  const {
    data: {
      listUsers: { items: list, nextToken },
    },
  }: any = await API.graphql({ query: LoginQuery, variables: { filter } });

  if (list && list.length > 0) {
    const loginedAt = dayjs().format("YYYY-MM-DDTHH:mm:ssZ[Z]");
    const updateLoginedAt = await API.graphql({
      query: updateLoginedAtQuery,
      variables: {
        input: {
          id: list[0].id,
          loginedAt,
        },
      },
    });
    return { ...list[0], loginedAt };
  } else return null;
};

//닉네임 기준으로 DB에 해당 닉네임에 비밀번호가 있는지 확인
export const isPasswordbyNickname = async (nickname: string) => {
  let filter = { nickname: { eq: nickname } };
  const {
    data: {
      listUsers: { items: list, nextToken },
    },
  }: any = await API.graphql({ query: listUsers, variables: { filter } });

  if (list && list.length > 0) return true;
  else return false;
};

//비밀번호 변경/등록 시 닉네임과 비밀번호가 이미 등록되어 있는지 확인
export const isPassword = async (nickname: string, password: string) => {
  let filter = {
    nickname: { eq: nickname },
    password: { eq: password },
  };
  const {
    data: {
      listUsers: { items: list, nextToken },
    },
  }: any = await API.graphql({ query: listUsers, variables: { filter } });

  if (list && list.length > 0) return true;
  else return false;
};
export const deleteUser = async (userId: string) => {
  const input = { id: userId };
  const {
    data: { deleteUser },
  }: any = await API.graphql({ query: de, variables: { input } });
  return !!deleteUser.id;
};

export const createUser = async ({
  nickname,
  loginedAt,
  password,
}: {
  nickname: string;
  loginedAt: string;
  password: string;
}) => {
  const input = {
    nickname,
    loginedAt,
    password,
  };

  const {
    data: { createUser },
  }: any = await API.graphql({ query: cu, variables: { input } });

  const result: {
    id: string; //"b710fe7d-c8a0-4cc9-ad69-867139fc4a30";
    nickname: string; //"2";
    email: null;
    loginedAt: string; //"2022-10-15T18:46:43.819+09:00";
    verifiedAt: null;
    password: string; //"started_at";
    createdAt: string; //"2022-10-15T11:20:33.906Z";
    updatedAt: string; //"2022-10-15T11:20:33.906Z";
  } = createUser;

  if (createUser && createUser.id) return result;
  else return null;
};

//비밀번호 변경
export const updatePasswordUser = async ({ id, password }: { id: string; password: string }) => {
  const input = {
    id,
    password,
  };
  const {
    data: { updateUser },
  }: any = await API.graphql({ query: updateUserQuery, variables: { input } });
  return !!updateUser.id;
};
export const updateNicknameUser = async ({ id, nickname }: { id: string; nickname: string }) => {
  const input = {
    id,
    nickname,
  };
  const {
    data: { updateUser },
  }: any = await API.graphql({ query: updateUserQuery, variables: { input } });
  return !!updateUser.id;
};
export const updateEmailUser = async ({ id, email }: { id: string; email: string }) => {
  const input = {
    id,
    email,
    verifiedAt: dayjs().format("YYYY-MM-DDTHH:mm:ssZ[Z]"),
  };
  const {
    data: { updateUser },
  }: any = await API.graphql({ query: updateUserQuery, variables: { input } });
  return updateUser;
};
//#endregion
//#region 메세지 관련
export const createMessage = async ({
  fileList,
  header,
  content,
  lat,
  lon,
}: {
  fileList: String[];
  header: String;
  content: String;
  lat: number;
  lon: number;
}) => {
  const input = {
    fileList,
    header,
    content,
    lat,
    lon,
  };

  const {
    data: { createMessage },
  }: any = await API.graphql({ query: cm, variables: { input } });

  const result: {
    content: string; //"Za";
    createdAt: string; //"2022-11-11T16:24:47.345Z";
    fileList: string[]; //["https://spacechatbdce7ffee4dc4aba99d592632e69ec2f1…ic/20221112T012445-1-20221112T000142-1-414400.jpg"]
    header: string; //"Z";
    id: string; //"0348e5c4-d155-4a79-92ef-63bcf5217a6a";
    lat: number; //37.487437;
    lon: number; // 127.127882;
    updatedAt: string; //"2022-11-11T16:24:47.345Z";
  } = createMessage;

  console.log("result", result);
  if (createMessage && createMessage.id) return result;
  else return null;
};

//#endregion
