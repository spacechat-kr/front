import { Box } from "@mui/material";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const defaultCenter = { lat: 28.612734, lng: 77.231178 };

const options = {
  disableDefaultUI: true,
  scaleControl: true,
  mapTypeId: "roadmap",
  labels: true,
};

export default function Map({
  setMap,
  children,
}: {
  setMap: (map: google.maps.Map) => void;
  children: JSX.Element | JSX.Element[];
}) {
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
        >
          {children}
        </GoogleMap>
      </Box>
    );
  };

  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;
  return isLoaded ? renderMap() : <div>Loading...</div>;
}
