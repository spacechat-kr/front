import { Box } from "@mui/material";
import { Circle, MarkerClusterer } from "@react-google-maps/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { IsWriteState } from "../pages/index/MapNavigation";
import CustomMarker from "./CustomMarker";
import Map from "./Map";

/**
 * 임시 테스트용 마커 리스트
 */
const locationList = Array.from({ length: 5000 }).map((i) => {
  const center = { lat: 37.494295, lng: 127.1329049 };
  const lat = Math.floor(Math.random() * 1000 - 500) / 5000 + center.lat;
  const lng = Math.floor(Math.random() * 1000 - 500) / 5000 + center.lng;
  const { maxLat, minLat, maxLng, minLng } = {
    maxLat: center.lat + 0.009094341036469854 * 3,
    minLat: center.lat - 0.009094341036469854 * 3,
    maxLng: center.lng + 0.01126887536623845 * 3,
    minLng: center.lng - 0.01126887536623845 * 3,
  }; //3km제한
  return {
    lat: maxLat < lat ? maxLat : minLat > lat ? minLat : lat,
    lng: maxLng < lng ? maxLng : minLng > lng ? minLng : lng,
  };
});

/**
 * @library https://www.npmjs.com/package/@react-google-maps/api
 * @example_site https://codesandbox.io/s/relaxed-proskuriakova-mi31c?file=/src/App.js:194-210
 */
export default function MapContainer() {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markerList, setMarkerList] = useState<{ lat: number; lng: number }[]>(locationList);
  const isWrite = useRecoilValue(IsWriteState);
  const router = useRouter();

  useEffect(() => {
    /** 마커 모두 보이는곳으로 이동, 추후 3km 반경보는곳으로 이동하는것도 가능 */
    const mapFitBounds = () => {
      // console.log("mapFitBounds:map> ", map);
      if (!map) return;
      const bounds = new google.maps.LatLngBounds();
      markerList.map((loc) => {
        bounds.extend(new google.maps.LatLng(loc.lat, loc.lng));
      });
      map.fitBounds(bounds);
    };
    // map.panTo(...)
    mapFitBounds();
  }, [map]);

  const place = {
    id: 1,
    position: {
      lat: 37.494295,
      lng: 127.1329049,
    },
    radius: 3000,
    style: {
      strokeColor: "#616779",
      strokeWeight: 2,
      fillColor: "#0000001e",
      fillOpacity: 0.35,
    },
  };
  const onClickMarker = () => router.push("#enter");
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
      }}
    >
      <Map setMap={setMap}>
        <MarkerClusterer>
          {(clusterer) =>
            markerList.map((loc, id) => {
              clusterer.setStyles([
                {
                  url: "/icons/map/lv2.svg",
                  width: 25,
                  height: 25,
                  backgroundPosition: `top ${-25 + 18}px`,
                },
                {
                  url: "/icons/map/lv3.svg",
                  width: 30,
                  height: 30,
                  backgroundPosition: `top ${-30 + 18}px`,
                },
                {
                  url: "/icons/map/lv4.svg",
                  width: 40,
                  height: 40,
                  backgroundPosition: `top ${-40 + 25}px`,
                },
              ]);
              return (
                <CustomMarker
                  key={id}
                  position={loc}
                  clusterer={clusterer}
                  onClick={onClickMarker}
                  // styles: [
                  //   {
                  //     fontFamily: "asd",
                  //     url:"",
                  //     height:10,
                  //     width:10,
                  //     //         url: string;
                  //     // className?: string;
                  //     // height: number;
                  //     // width: number;
                  //     // anchorText?: number[];
                  //     // anchorIcon?: number[];
                  //     // textColor?: string;
                  //     // textSize?: number;
                  //     // textDecoration?: string;
                  //     // fontWeight?: string;
                  //     // fontStyle?: string;
                  //     // fontFamily?: string;
                  //     // backgroundPosition?: string;
                  //   },
                  // ],
                  // }}
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