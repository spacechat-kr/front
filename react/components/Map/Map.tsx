import { Box } from "@mui/material";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IsHideHomeHeaderState, IsHomeHeaderState } from "../pages/index/HomeHeader";

const defaultCenter = { lat: 28.612734, lng: 77.231178 };

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
  styles: style,
};

export default function Map({
  setMap,
  children,
}: {
  setMap: (map: google.maps.Map) => void;
  children: JSX.Element | JSX.Element[];
}) {
  const [isOpen, setIsOpen] = useRecoilState(IsHomeHeaderState);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCwoQM-TnxyGry-EgM7dZ5Jh-ymTi1rdZU",
    // ...otherOptions
  });

  const renderMap = () => {
    const loadHandler = (map: google.maps.Map) => setMap(map);
    return (
      <Box
        sx={{
          "*": { outline: "none !important" },
        }}
      >
        <GoogleMap
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
