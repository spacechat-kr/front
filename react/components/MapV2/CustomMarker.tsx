import { Marker } from "@react-google-maps/api";
import { Clusterer } from "@react-google-maps/marker-clusterer";

export default function CustomMarker({
  position,
  clusterer,
  onClick,
}: {
  position: google.maps.LatLng | google.maps.LatLngLiteral;
  clusterer: Clusterer;
  onClick?: (e: google.maps.MapMouseEvent) => void;
}) {
  return <Marker position={position} clusterer={clusterer} icon="/icons/map/lv1.svg" onClick={onClick} />;
}
