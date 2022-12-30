import { Box } from "@mui/material";
import { Circle, MarkerClusterer } from "@react-google-maps/api";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { atom, selectorFamily, useRecoilValue } from "recoil";
import { IsWriteState } from "../pages/index/MapNavigation";
import CustomMarker from "./CustomMarker";
import Map from "./Map";
import { defaultMarker, MarkerType } from "./MapContainer.module";

const defaultCenter = { lat: 37.494295, lng: 127.1329049 };
export const markerListState = atom<MarkerType[]>({
  key: "markerListState",
  default: [
    {
      ...defaultMarker,
      latitude: defaultCenter.lat,
      longitude: defaultCenter.lng,
    },
  ],
});
export const markerListStateSelector = selectorFamily({
  key: "markerListStateSelector",
  get:
    (postId) =>
    ({ get }) => {
      const list = get(markerListState).filter((i) => i.postId === postId);
      return list.length > 0 ? list[0] : null;
    },
  set:
    (postId) =>
    ({ set }, newValue) =>
      set(markerListState, (prev) => {
        const newMarker = newValue as MarkerType;
        const prevList = prev.filter((i) => i.postId !== postId);
        if (newValue) return [...prevList, newMarker];
        else return prevList;
      }),
});

export let mapInstance: google.maps.Map | null = null;
/**
 * @library https://www.npmjs.com/package/@react-google-maps/api
 * @example_site https://codesandbox.io/s/relaxed-proskuriakova-mi31c?file=/src/App.js:194-210
 */
export default function MapContainer() {
  const router = useRouter();
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const markerList = useRecoilValue(markerListState);
  const isWrite = useRecoilValue(IsWriteState);
  const clusterRef = useRef<any>(null);

  useEffect(() => {
    document.body.style.overscrollBehavior = "contain";
    return () => {
      document.body.style.overscrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    /** 마커 모두 보이는곳으로 이동, 추후 3km 반경보는곳으로 이동하는것도 가능 */
    mapInstance = map;
    const mapFitBounds = () => {
      if (!map) return;
      const bounds = new google.maps.LatLngBounds();
      markerList.map((loc) => {
        bounds.extend(new google.maps.LatLng(loc.latitude, loc.longitude));
      });
      map.fitBounds(bounds);
    };
    // map.panTo(...)
    mapFitBounds();
  }, [map]);

  const clusterStyle = useMemo(
    () => [
      {
        url: isWrite ? "/icons/map/lv2_transparent.svg" : "/icons/map/lv2.svg",
        width: 25,
        height: 25,
        backgroundPosition: `top ${-25 + 18}px`,
      },
      {
        url: isWrite ? "/icons/map/lv3_transparent.svg" : "/icons/map/lv3.svg",
        width: 30,
        height: 30,
        backgroundPosition: `top ${-30 + 18}px`,
      },
      {
        url: isWrite ? "/icons/map/lv4_transparent.svg" : "/icons/map/lv4.svg",
        width: 40,
        height: 40,
        backgroundPosition: `top ${-40 + 25}px`,
      },
    ],
    [isWrite]
  );
  useEffect(() => {
    if (clusterRef.current) {
      clusterRef.current.setStyles(clusterStyle);
      clusterRef.current.repaint();
    }
  }, [isWrite]);
  const place = {
    id: 1,
    position: defaultCenter,
    radius: 3000,
    style: {
      strokeColor: "#616779",
      strokeWeight: 2,
      fillColor: "#0000001e",
      fillOpacity: 0.35,
    },
  };
  const onClickMarker = useCallback(
    (postId: string) => {
      if (!isWrite) router.push(`#enter?postId=${postId}`);
    },
    [isWrite]
  );
  return (
    <Box
      sx={{
        "div.cluster > div": {
          fontFamily: "AppleSDGothicNeo !important",
          fontWeight: 700,
          fontSize: "18px !important",
          lineHeight: "18px !important",
          letterSpacing: "-0.4px",
          color: "white !important",
          textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
          position: "relative",
          left: "-1px !important",
        },
        "button.gm-ui-hover-effect": {
          right: "0px !important",
          top: "0px !important",
        },
        "div.transit-title": {
          fontFamily: "AppleSDGothicNeo !important",
          fontWeight: 700,
        },
        "div.title": {
          fontFamily: "AppleSDGothicNeo !important",
          fontWeight: 700,
        },
        "div.address-line": {
          fontFamily: "AppleSDGothicNeo !important",
        },
        "div.view-link": {
          display: "none",
        },
      }}
    >
      <Map setMap={setMap} map={map}>
        <MarkerClusterer>
          {(clusterer) =>
            markerList.map((marker, id) => {
              clusterRef.current = clusterer;
              clusterer.setStyles(clusterStyle);

              return (
                <CustomMarker
                  key={id}
                  position={{ lng: marker.longitude, lat: marker.latitude }}
                  clusterer={clusterer}
                  onClick={() => onClickMarker(marker.postId)}
                  disable={isWrite}
                />
              );
            })
          }
        </MarkerClusterer>
        <Circle
          // draggable?: boolean | undefined;
          // editable?: boolean | undefined;
          visible={isWrite}
          center={place.position}
          radius={place.radius}
          options={place.style}
        />
      </Map>
    </Box>
  );
}
