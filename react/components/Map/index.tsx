import { useLoadScript } from "@react-google-maps/api";

let writeArea;
let object;

const AnyReactComponent = ({ lat, lng, text }) => <div>{text}</div>;

/** 참고사이트
 * @site1 https://henrymin.tistory.com/category/google%20maps
 */
export default function Map() {
  // const [isWrite, setIsWrite] = useRecoilState(IsWriteState);
  // const mapsRef = useRef<any>(null);
  // const mapRef = useRef<any>(null);
  // const position = {
  //   lat: 37.494295,
  //   lon: 127.1329049,
  //   zoom: 11,
  // };
  // const onGoogleApi = ({ map, maps, ref }: { map: any; maps: any; ref: Element | null }) => {
  //   mapsRef.current = maps;
  //   mapRef.current = map;
  // };

  // useEffect(() => {
  //   if (mapsRef.current)
  //     if (isWrite) {
  //       writeArea = new mapsRef.current.Circle({
  //         strokeColor: "#616779",
  //         strokeWeight: 2,
  //         fillColor: "#0000001e",
  //         fillOpacity: 0.35,
  //         map: mapRef.current,
  //         center: { lat: position.lat, lng: position.lon },
  //         radius: 3000,
  //       });

  //       // const element = document.querySelector("#__next > div > div > div:nth-child(1) > div > div > div > div");
  //       // console.log(element);
  //       // const map = new mapsRef.current.Map(element); //mapOptions

  //       const markers = locations.map(
  //         ({ lat, lng }) =>
  //           new mapsRef.current.Marker({
  //             position: {
  //               lat: lat,
  //               lng: lng,
  //             },
  //             map: mapsRef.current,
  //           })
  //       );

  //       new MarkerClusterer({ map: mapsRef.current, markers });
  //     } else if (writeArea) writeArea.setMap(null);
  // }, [isWrite]);

  // const { setMap, children } = props;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBsk8fe2yngY-Nz5su1YrOLUneiYcYXSms", // ,
    // ...otherOptions
  });

  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}>
        {/* <GoogleMapReact
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
          <Marker lat={position.lat + 0.001} lng={position.lon + 0.001} type="circle" color="#0A84FF" />
        </GoogleMapReact> */}
      </div>
    </>
  );
}

const locations = [
  { lat: 37.494295, lng: 127.1329049 },
  { lat: 37.494295, lng: 127.1329149 },
  { lat: 37.494295, lng: 127.1329249 },
  { lat: 37.494295, lng: 127.1329349 },
  { lat: 37.494295, lng: 127.1329449 },
  { lat: 37.494195, lng: 127.1329049 },
  { lat: 37.494295, lng: 127.1329049 },
  { lat: 37.494395, lng: 127.1329049 },
  { lat: 37.494495, lng: 127.1329049 },
  { lat: 37.494595, lng: 127.1329049 },
  { lat: 37.494695, lng: 127.1329049 },
  { lat: 37.494295, lng: 127.1329049 },
  { lat: 37.494295, lng: 127.1329049 },
  { lat: 37.494295, lng: 127.1329049 },
  { lat: 37.494295, lng: 127.1329049 },
  { lat: 37.494295, lng: 127.1329049 },
  { lat: 37.494295, lng: 127.1329049 },
  { lat: 37.494295, lng: 127.1329049 },
  { lat: 37.494295, lng: 127.1329049 },
  { lat: 37.494295, lng: 127.1329049 },
  { lat: 37.494295, lng: 127.1329049 },
  { lat: 37.494295, lng: 127.1329049 },
  { lat: 37.494295, lng: 127.1329049 },
];
