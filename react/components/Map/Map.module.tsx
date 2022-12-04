import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { mapStyle, mapStyleCustom, mapStyleGray } from "../../constant/mapStyle";

let circle;

export const options: (a: boolean, b: boolean) => GoogleMapReact.MapOptions = (
  isFullScreen: boolean,
  isFreezeSlide: boolean
) => {
  return {
    minZoom: 12,
    maxZoom: 20,
    gestureHandling: isFreezeSlide ? "greedy" : "none",
    mapTypeControl: isFreezeSlide,
    scrollwheel: isFreezeSlide,
    zoomControl: isFreezeSlide,
    noClear:true,
    clickableIcons: false,
    fullscreenControl: isFreezeSlide,
    disableDoubleClickZoom: true,
    keyboardShortcuts: true,
    backgroundColor: "white", //'#110043',
    // backgroundColor: "transparent", //'#110043',
    styles: [
      mapStyleCustom(isFreezeSlide),
      // ...(!isFullScreen && !isFreezeSlide ? mapStyleGray : mapStyle)
    ],
  };
};

export type StyleProps = {
  isMobile: boolean | null;
  isPwa: boolean;
  isVisible: number | undefined;
  isFullScreen: boolean;
};
export const MapStyle: (p?: StyleProps) => SxProps<Theme> = (
  p = {
    isMobile: null,
    isPwa: false,
    isVisible: 1,
    isFullScreen: true,
  }
) => {
  return {
    width: "100%",
    maxWidth: 600,
    "*": { outline: "none !important" },
    "#맵": {
      height: p.isPwa ? "calc(100vh - 60px)" : p.isMobile ? "calc(100vh - 116px)" : "100%",
      overflow: "hidden",
      opacity: p.isVisible ? 1 : 0,
      transition: "all 0.2s",
      borderRadius: p.isFullScreen ? 0 : 1,
      margin: p.isFullScreen ? 0 : 1,
    },
    "#구글지도설정": {
      ".gm-fullscreen-control": {
        background: "#e5e5eaad !important",
      },
      height: p.isFullScreen ? "calc(100vh - 38px)" : "calc(60vh + 26px)",

      ".gm-bundled-control": {
        bottom: "calc(182px + 32px) !important",
      },
      ".gmnoprint": {
        display: "none",
      },
      'div[style="margin: 0px 5px; z-index: 1000000; position: absolute; left: 0px; bottom: 0px;"]': {
        display: "none",
      },
      'div[aria-label="지도"]': {
        background: "rgba(0,0,0,0.6)",
      },
    },
  };
};

export type PositionType = { lat: number | undefined; lon: number | undefined; zoom: number };
export const PositionInit = { lat: 37, lon: 127, zoom: 16 };

export const onGoogleApiLoaded = ({ map, maps, position }: { map: any; maps: any; position: PositionType }) => {
  if (!position.lon || !position.lat || !maps || !maps.Circle) return;
  circle = new maps.Circle({
    strokeColor: "#ff000084",
    strokeOpacity: 0.5,
    strokeWeight: 1.8,
    fillColor: "#ff00001e",
    fillOpacity: 0.16,
    map,
    center: { lat: position.lat, lon: position.lon },
    radius: 1000, //m 기준, 1000이면 1km
  });
  circle = new maps.Circle({
    strokeColor: "#0800ff77",
    strokeOpacity: 0.5,
    strokeWeight: 2,
    fillColor: "#0800ff14",
    fillOpacity: 0.2,
    map,
    center: { lat: position.lat + 0.001, lon: position.lon + 0.001 },
    radius: 3000, //m 기준, 1000이면 1km
  });
  // circle = new maps.Marker({
  //   position: { lat: position.lat + 0.001, lon: position.lon + 0.001 },
  //   icon: "/icons/map/blueSvg.svg",
  //   map: map,
  // });

  // circle = new maps.Rectangle({
  //   strokeColor: "#FF0000",
  //   strokeOpacity: 0.8,
  //   strokeWeight: 2,
  //   fillColor: "#FF0000",
  //   fillOpacity: 0.35,
  //   borderRadius: 100,
  //   map: map,
  //   bounds: new maps.LatLngBounds(
  //     new maps.LatLng(position.lat, position.lon),
  //     new maps.LatLng(position.lat + 0.001, position.lon + 0.001)
  //   ),
  // });
};
