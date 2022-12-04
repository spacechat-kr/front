import { MouseEventHandler, useEffect, useState } from "react";

import LockIcon from "@mui/icons-material/Lock";
import { Box, ButtonBase } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { usePwa } from "react-pwa-toolkit";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { IsMobileState } from "../../constant/hook/recoil/IsMobileState";
import { GPSDataType } from "../page/MainPage";
import { MapStyle, onGoogleApiLoaded, options, PositionInit, PositionType } from "./Map.module";
import { Marker } from "./marker";
import { useWatchLocation, geolocationOptions } from "./useWatchLocation";

// getDistance({ latitude: 51.5103, longitude: 7.49347 }, { latitude: "51° 31' N", longitude: "7° 28' E" });
//https://mapstyle.withgoogle.com/

export const MyPositionState = atom<PositionType>({ key: "MyPositionState", default: PositionInit });
export default function Map({
  isExplorer,
  GPSData,
  isFullScreen = false,
  isFreezeSlide = false,
}: {
  isExplorer?: boolean;
  GPSData?: GPSDataType;
  isFullScreen?: boolean;
  isFreezeSlide?: boolean;
}) {
  const isMobile = useRecoilValue(IsMobileState);
  const [position, setPosition] = useState<PositionType>(PositionInit);
  const isVisible = position.lat && position.lon;
  const isPwa = usePwa();

  //#region 실시간 GPS 가져오기 useWatchLocation
  const { location, cancelLocationWatch } = useWatchLocation();

  useEffect(() => {
    if (location && location.latitude && location.longitude) {
      setPosition((prev) => {
        return { ...prev, lat: location.latitude, lon: location.longitude };
      });
    } else if (GPSData && GPSData.latitude && GPSData.longitude) {
      setPosition((prev) => {
        return {
          ...prev,
          lat: GPSData.latitude ? GPSData.latitude : undefined,
          lon: GPSData.longitude ? GPSData.longitude : undefined,
        };
      });
    }
  }, [location, GPSData]);

  console.log(location);
  // useEffect(() => {
  //   return () => cancelLocationWatch();
  // }, []);
  //#endregion

  if (!position.lat || !position.lon) return <></>;

  const markerSize = position.zoom * 2 - 22;

  return (
    <Box sx={MapStyle({ isMobile, isPwa, isVisible, isFullScreen })}>
      {isExplorer && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: isMobile ? "calc(100vh - 116px)" : "100vh",
            maxWidth: 600,
            background: isFreezeSlide ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.5)",
            transition: "all 0.3s",
            visibility: isFreezeSlide ? "hidden" : "visible",
            zIndex: 1,
            display: "flex",
            justifyContent: "flex-end",
            padding: 16,
            cursor: "pointer",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 10,
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <LockIcon />
            Touch
          </div>
        </div>
      )}

      <div id="맵">
        <div id="구글지도설정">
          <div style={{ position: "relative", height: 0, zIndex: 1,display:'flex',gap:4,justifyContent:'center' }}>
            <div>{location?.latitude}</div>
            <div>{location?.longitude}</div>
          </div>

          <GoogleMapReact
            options={options(isFullScreen, isFreezeSlide)}
            bootstrapURLKeys={{ key: "AIzaSyCwoQM-TnxyGry-EgM7dZ5Jh-ymTi1rdZU" }}
            center={{
              lat: position.lat ? position.lat : PositionInit.lat,
              lng: position.lon ? position.lon : PositionInit.lon,
            }}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={(props) => onGoogleApiLoaded({ ...props, position })}
            zoom={position.zoom}
            onZoomAnimationStart={(zoom) => {
              if (position.zoom != zoom)
                setPosition((prev) => {
                  return { ...prev, zoom };
                });
            }}
          >
            <Marker lat={position.lat} lng={position.lon} type="circle" width={12} height={12} />
            <Marker
              lat={position.lat + 0.001}
              lng={position.lon + 0.001}
              type="circle"
              width={markerSize}
              height={markerSize}
              color="#0A84FF"
            />
          </GoogleMapReact>
        </div>
      </div>
    </Box>
  );
}
