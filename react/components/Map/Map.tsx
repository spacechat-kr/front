import { Box } from "@mui/material";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { IsHomeHeaderState, userDataState } from "../pages/index/HomeHeader";
import { throttle } from "lodash";
import { IsWriteDisableState, IsWriteState } from "../pages/index/MapNavigation";
import { useEffect } from "react";
import { getDistance } from "./getDistance";
import { ax } from "../../pages/_app";
export const defaultCenter = { lat: 37.494295, lng: 127.1329049 };
export const CenterState = atom({ key: "CenterState", default: defaultCenter });

const style = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];
const options: google.maps.MapOptions = {
  disableDefaultUI: true,
  scaleControl: true,
  mapTypeId: "roadmap",
  minZoom: 15,
  maxZoom: 18,
  styles: style,
  center: defaultCenter,
  disableDoubleClickZoom: true,
  gestureHandling: "greedy",
  noClear: true,
  backgroundColor: "#17263C",
};

export default function Map({
  map,
  setMap,
  children,
}: {
  map: google.maps.Map | null;
  setMap: (map: google.maps.Map) => void;
  children: JSX.Element | JSX.Element[];
}) {
  const isWrite = useRecoilValue(IsWriteState);
  const [isDisable, setIsDisable] = useRecoilState(IsWriteDisableState);
  const [isOpen, setIsOpen] = useRecoilState(IsHomeHeaderState);
  const center = useRecoilValue(CenterState);
  const userData = useRecoilValue(userDataState);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCwoQM-TnxyGry-EgM7dZ5Jh-ymTi1rdZU",
  });

  useEffect(() => {
    onMove();
  }, [isWrite]);
  const CheckDistacneLimit = throttle(() => {
    const lat = map?.getCenter()?.lat();
    const lng = map?.getCenter()?.lng();
    if (!lat || !lng || !isWrite) return;

    const distance = getDistance(center, { lat, lng });
    if (distance >= 3 && !isDisable) setIsDisable(true);
    else if (distance < 3 && isDisable) setIsDisable(false);
  }, 25);
  const getMarkerListByCenter = throttle(() => {
    const lat = map?.getCenter()?.lat();
    const lng = map?.getCenter()?.lng();
    if (!lat || !lng) return;

    const { maxLat, minLat, maxLng, minLng } = {
      maxLat: lat + 0.009094341036469854 * 3,
      minLat: lat - 0.009094341036469854 * 3,
      maxLng: lng + 0.01126887536623845 * 3,
      minLng: lng - 0.01126887536623845 * 3,
    }; //3km제한
    ax.post(`/post/getPostByLocation`, {
      endLatitude: maxLat,
      endLongitude: maxLng,
      startLatitude: minLat,
      startLongitude: minLng,
      userId: userData.uuid,
    });
  }, 1000);
  const onMove = () => {
    CheckDistacneLimit();
    getMarkerListByCenter();
  };

  const renderMap = () => {
    const loadHandler = (map: google.maps.Map) => setMap(map);
    return (
      <Box
        sx={{
          "*": { outline: "none !important" },
          "img[alt=Google],div.gmnoprint": {
            display: "none",
          },
          "button.gm-style-cc": {
            display: "flex",
            width: "100vw",
            maxWidth: 900,
            justifyContent: "center",
          },
        }}
      >
        <GoogleMap
          onDrag={onMove}
          onIdle={onMove}
          id="circle-example"
          mapContainerStyle={{
            height: "100vh",
            width: "100vw",
            maxWidth: 900,
          }}
          zoom={7}
          center={center}
          options={options}
          onLoad={loadHandler}
          onDragStart={() => {
            if (isOpen) setIsOpen(false);
          }}
        >
          {children}
        </GoogleMap>
      </Box>
    );
  };

  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;
  return isLoaded ? renderMap() : <div>Loading...</div>;
}
