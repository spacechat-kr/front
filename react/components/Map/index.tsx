import GoogleMapReact from "google-map-react";
import { onGoogleApiLoaded, options } from "./Map.module";
import { Marker } from "./marker";

const AnyReactComponent = ({ lat, lng, text }) => <div>{text}</div>;

export default function Map() {
  const position = {
    lat: 37.494295,
    lon: 127.1329049,
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        options={options(false, true)}
        bootstrapURLKeys={{ key: "AIzaSyCwoQM-TnxyGry-EgM7dZ5Jh-ymTi1rdZU" }}
        center={{
          lat: position.lat,
          lng: position.lon,
        }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={(props) => onGoogleApiLoaded({ ...props, position })}
        zoom={position.zoom}
        // onZoomAnimationStart={(zoom) => {
        //   if (position.zoom != zoom)
        //     setPosition((prev) => {
        //       return { ...prev, zoom };
        //     });
        // }}
      >
        <Marker lat={position.lat} lng={position.lon} type="circle" width={12} height={12} />
        <Marker
          lat={position.lat + 0.001}
          lng={position.lon + 0.001}
          type="circle"
          // width={markerSize}
          // height={markerSize}
          color="#0A84FF"
        />
      </GoogleMapReact>

      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact> */}
    </div>
  );
}
