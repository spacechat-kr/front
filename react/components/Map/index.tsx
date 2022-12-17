import GoogleMapReact from "google-map-react";
import { useRecoilState } from "recoil";
import { options, PositionType } from "./Map.module";
import { Marker } from "./marker";
import { useEffect, useRef } from "react";
import { IsWriteState } from "../pages/index/MapNavigation";

let writeArea;
let object;

const AnyReactComponent = ({ lat, lng, text }) => <div>{text}</div>;

/** 참고사이트
 * @site1 https://henrymin.tistory.com/category/google%20maps
 */
export default function Map() {
  const [isWrite, setIsWrite] = useRecoilState(IsWriteState);
  const mapsRef = useRef<any>(null);
  const mapRef = useRef<any>(null);
  const position = {
    lat: 37.494295,
    lon: 127.1329049,
    zoom: 11,
  };
  const onGoogleApi = ({ map, maps, ref }: { map: any; maps: any; ref: Element | null }) => {
    mapsRef.current = maps;
    mapRef.current = map;
  };

  useEffect(() => {
    if (mapsRef.current)
      if (isWrite) {
        writeArea = new mapsRef.current.Circle({
          strokeColor: "#616779",
          strokeWeight: 2,
          fillColor: "#0000001e",
          fillOpacity: 0.35,
          map: mapRef.current,
          center: { lat: position.lat, lng: position.lon },
          radius: 3000,
        });
      } else if (writeArea) writeArea.setMap(null);
  }, [isWrite]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        options={options(false, true)}
        bootstrapURLKeys={{ key: "AIzaSyCwoQM-TnxyGry-EgM7dZ5Jh-ymTi1rdZU" }}
        center={{
          lat: position.lat,
          lng: position.lon,
        }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={onGoogleApi}
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
    </div>
  );
}

// const onGoogleApiLoaded = ({
//   map,
//   maps,
//   position,
//   isWrite,
// }: {
//   map: any;
//   maps: any;
//   position: PositionType;
//   isWrite: boolean;
// }) => {
//   if (!position.lon || !position.lat || !maps || !maps.Circle) return;
//   writeArea = new maps.Circle({
//     strokeColor: "#FF0000",
//     strokeOpacity: 0.8,
//     strokeWeight: 2,
//     fillColor: "#FF0000",
//     fillOpacity: 0.35,
//     map,
//     center: { lat: position.lat, lng: position.lon },
//     radius: 3000,
//   });
//   // circle = new maps.Circle({
//   //   strokeColor: "#ff000084",
//   //   strokeOpacity: 0.5,
//   //   strokeWeight: 1.8,
//   //   fillColor: "#ff00001e",
//   //   fillOpacity: 0.16,
//   //   map,
//   //   center: { lat: position.lat, lon: position.lon },
//   //   radius: 1000, //m 기준, 1000이면 1km
//   // });
//   // circle = new maps.Circle({
//   //   strokeColor: "#ff000084",
//   //   strokeOpacity: 1,
//   //   strokeWeight: 20,
//   //   fillColor: "#ff00001e",
//   //   fillOpacity: 1,
//   //   map,
//   //   center: { lat: position.lat, lon: position.lon },
//   //   radius: 3000, //m 기준, 1000이면 1km
//   // });
//   // circle = new maps.Marker({
//   //   position: { lat: position.lat + 0.001, lon: position.lon + 0.001 },
//   //   icon: "/icons/map/blueSvg.svg",
//   //   map: map,
//   // });

//   // circle = new maps.Rectangle({
//   //   strokeColor: "#FF0000",
//   //   strokeOpacity: 0.8,
//   //   strokeWeight: 2,
//   //   fillColor: "#FF0000",
//   //   fillOpacity: 0.35,
//   //   borderRadius: 100,
//   //   map: map,
//   //   bounds: new maps.LatLngBounds(
//   //     new maps.LatLng(position.lat, position.lon),
//   //     new maps.LatLng(position.lat + 0.001, position.lon + 0.001)
//   //   ),
//   // });
// };
