import { Marker } from "@react-google-maps/api";
import { Clusterer } from "@react-google-maps/marker-clusterer";

export default function CustomMarker({
  position,
  clusterer,
}: {
  position: google.maps.LatLng | google.maps.LatLngLiteral;
  clusterer: Clusterer;
}) {
  return <Marker position={position} clusterer={clusterer} />;
}
