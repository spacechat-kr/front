import { atom } from "recoil";
import { localStorageEffect } from "../localStorageEffect";

export const UserState = atom<{
  id: string | null;
  nickname: string | null;
  email: string | null;
  loginedAt: string | null; //dayjs.format YYYY-MM-DDTHH:mm:ssZ[Z]"
  createdAt: string | null; //"2022-10-08T08:53:59.676Z"
  verifiedAt: string | null; //dayjs.format YYYY-MM-DDTHH:mm:ssZ[Z]"
}>({
  default: { id: null, nickname: null, email: null, loginedAt: null, createdAt: null, verifiedAt: null },
  key: "UserState",
  effects_UNSTABLE: [localStorageEffect("cache/UserState")],
});
