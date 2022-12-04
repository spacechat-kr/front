import { useEffect, useRef, useState } from "react";

//반복 시간설정
export const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 3, // 1 min (1000 ms * 60 sec = 60 000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};

//React에서의 GeoLocation
//https://jw910911.tistory.com/108
export const useWatchLocation = () => {
  // 내 위치 정보 저장
  const [location, setLocation] = useState<{ latitude: number; longitude: number }>();
  // 에러 메세지 저장
  // const [error, setError] = useState();
  // watch 인스턴스를 취소할 수 있도록 Geolocation의 `watchPosition`에서 반환된 ID를 저장합니다.
  const locationWatchId = useRef<number | null>(null);

  // Geolocation의 `watchPosition` 메소드에 대한 성공 callback 핸들러
  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;
    setLocation({
      latitude,
      longitude,
    });
  };
  // Geolocation의 `watchPosition` 메소드에 대한 실패 callback 핸들러
  const handleError = (error) => console.error(error.message);

  // 저장된 `watchPosition` ID를 기반으로 감시 인스턴스를 지웁니다.
  const cancelLocationWatch = () => {
    if (locationWatchId.current && navigator.geolocation) navigator.geolocation.clearWatch(locationWatchId.current);
  };

  useEffect(() => {
    const { geolocation } = navigator;
    // 사용된 브라우저에서 지리적 위치(Geolocation)가 정의되지 않은 경우 오류로 처리합니다.
    if (!geolocation) {
      console.error("Geolocation is not supported.");
      return;
    }

    // Geolocation API로 위치 감시 시작
    locationWatchId.current = geolocation.watchPosition(handleSuccess, handleError, geolocationOptions);

    // React가 사용된 구성 요소를 마운트 해제할 때 위치 감시 인스턴스를 지웁니다.
    return cancelLocationWatch;
  }, []);

  return { location, cancelLocationWatch };
};
