// 두 좌표간 거리계산
export const getDistance = (pos1: { lat: number; lng: number }, pos2: { lat: number; lng: number }) => {
  const toRadians = (deg) => deg * (Math.PI / 180);
  const { lat: lat1, lng: lng1 } = pos1;
  const { lat: lat2, lng: lng2 } = pos2;
  const dlat = toRadians(lat2 - lat1);
  const dlon = toRadians(lng1 - lng2);
  const a =
    Math.sin(dlat / 2) * Math.sin(dlat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dlon / 2) * Math.sin(dlon / 2);
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};
