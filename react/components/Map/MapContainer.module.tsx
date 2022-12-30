import { defaultCenter } from "./Map";

export const defaultMarker = {
  createdAt: "2022-12-30T13:00:44",
  description: "desc",
  iconPath: "https://www.spacechat.kr/icons/modalCreate.png",
  latitude: 0,
  longitude: 0,
  postId: "14a3b374-4bc8-4eb7-9e4c-24db851561c8",
  title: "012345678901234님의 쪽지",
  userId: "2bfd6570-da54-fd08-f952-3b053cdd5121",
};
/**
 * 임시 테스트용 마커 리스트
 */
export const locationList = Array.from({ length: 5000 }).map((i) => {
  const center = defaultCenter;
  const lat = Math.floor(Math.random() * 1000 - 500) / 5000 + center.lat;
  const lng = Math.floor(Math.random() * 1000 - 500) / 5000 + center.lng;
  const { maxLat, minLat, maxLng, minLng } = {
    maxLat: center.lat + 0.009094341036469854 * 3,
    minLat: center.lat - 0.009094341036469854 * 3,
    maxLng: center.lng + 0.01126887536623845 * 3,
    minLng: center.lng - 0.01126887536623845 * 3,
  }; //3km제한
  return {
    ...defaultMarker,
    latitude: maxLat < lat ? maxLat : minLat > lat ? minLat : lat,
    longitude: maxLng < lng ? maxLng : minLng > lng ? minLng : lng,
  };
});
export type MarkerType = {
  createdAt: string; //"2022-12-30T13:00:44";
  description: string; //"";
  iconPath: string; //"https://www.spacechat.kr/icons/modalCreate.png";
  latitude: number; //37.49429998337241;
  longitude: number; //127.13290489999999;
  postId: string; //"14a3b374-4bc8-4eb7-9e4c-24db851561c8";
  title: string; //"012345678901234님의 쪽지";
  userId: string; //"2bfd6570-da54-fd08-f952-3b053cdd5121";
};
