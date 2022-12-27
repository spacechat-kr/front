import { Box } from "@mui/material";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useRecoilState, useRecoilValue } from "recoil";
import { IsHomeHeaderState } from "../pages/index/HomeHeader";
import { throttle } from "lodash";
import { IsWriteDisableState, IsWriteState } from "../pages/index/MapNavigation";
export const defaultCenter = { lat: 37.494295, lng: 127.1329049 };

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
};

// 두 좌표간 거리계산
const getDistance = (pos1: { lat: number; lng: number }, pos2: { lat: number; lng: number }) => {
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
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCwoQM-TnxyGry-EgM7dZ5Jh-ymTi1rdZU",
  });

  const onMove = throttle(() => {
    const lat = map?.getCenter()?.lat();
    const lng = map?.getCenter()?.lng();
    if (!lat || !lng || !isWrite) return;

    const distance = getDistance(defaultCenter, { lat, lng });
    if (distance >= 3 && !isDisable) setIsDisable(true);
    else if (distance < 3 && isDisable) setIsDisable(false);
  }, 25);
  const renderMap = () => {
    const loadHandler = (map: google.maps.Map) => setMap(map);
    return (
      <Box
        sx={{
          "*": { outline: "none !important" },
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
          center={defaultCenter}
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
