import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { mapStyle, mapStyleCustom, mapStyleGray } from "../../constant/mapStyle";

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
    noClear: true,
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
