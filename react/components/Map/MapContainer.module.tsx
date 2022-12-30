export const defaultMarker = {
  createdAt: "2022-12-30T13:00:44",
  description: "desc",
  iconPath: "https://www.spacechat.kr/icons/modalCreate.png",
  latitude: 0,
  longitude: 0,
  postId: "14a3b374-4bc8-4eb7-9e4c-24db851561c8",
  title: "012345678901234님의 쪽지",
  userId: "2bfd6570-da54-fd08-f952-3b053cdd5121",
};
const defaultCenter = { lat: 37.494295, lng: 127.1329049 };
/**
 * 임시 테스트용 마커 리스트
 */
export const locationList = Array.from({ length: 5000 }).map((i) => {
  const center = defaultCenter;
  const lat = Math.floor(Math.random() * 1000 - 500) / 5000 + center.lat;
  const lng = Math.floor(Math.random() * 1000 - 500) / 5000 + center.lng;
  const { maxLat, minLat, maxLng, minLng } = {
    maxLat: center.lat + 0.009094341036469854 * 3,
    minLat: center.lat - 0.009094341036469854 * 3,
    maxLng: center.lng + 0.01126887536623845 * 3,
    minLng: center.lng - 0.01126887536623845 * 3,
  }; //3km제한
  return {
    ...defaultMarker,
    latitude: maxLat < lat ? maxLat : minLat > lat ? minLat : lat,
    longitude: maxLng < lng ? maxLng : minLng > lng ? minLng : lng,
  };
});
export type MarkerType = {
  createdAt: string; //"2022-12-30T13:00:44";
  description: string; //"";
  iconPath: string; //"https://www.spacechat.kr/icons/modalCreate.png";
  latitude: number; //37.49429998337241;
  longitude: number; //127.13290489999999;
  postId: string; //"14a3b374-4bc8-4eb7-9e4c-24db851561c8";
  title: string; //"012345678901234님의 쪽지";
  userId: string; //"2bfd6570-da54-fd08-f952-3b053cdd5121";
};

/**
 * Handy functions to project lat/lng to pixel
 * Extracted from: https://developers.google.com/maps/documentation/javascript/examples/map-coordinates
 **/
function project(latLng) {
  var TILE_SIZE = 256;

  var siny = Math.sin((latLng.lat() * Math.PI) / 180);

  // Truncating to 0.9999 effectively limits latitude to 89.189. This is
  // about a third of a tile past the edge of the world tile.
  siny = Math.min(Math.max(siny, -0.9999), 0.9999);

  return new google.maps.Point(
    TILE_SIZE * (0.5 + latLng.lng() / 360),
    TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI))
  );
}

/**
 * Handy functions to project lat/lng to pixel
 * Extracted from: https://developers.google.com/maps/documentation/javascript/examples/map-coordinates
 **/
function getPixel(latLng, zoom) {
  var scale = 1 << zoom;
  var worldCoordinate = project(latLng);
  return new google.maps.Point(Math.floor(worldCoordinate.x * scale), Math.floor(worldCoordinate.y * scale));
}

/**
 * Given a map, return the map dimension (width and height)
 * in pixels.
 **/
function getMapDimenInPixels(map) {
  var zoom = map.getZoom();
  var bounds = map.getBounds();
  var southWestPixel = getPixel(bounds.getSouthWest(), zoom);
  var northEastPixel = getPixel(bounds.getNorthEast(), zoom);
  return {
    width: Math.abs(southWestPixel.x - northEastPixel.x),
    height: Math.abs(southWestPixel.y - northEastPixel.y),
  };
}

/**
 * Given a map and a destLatLng returns true if calling
 * map.panTo(destLatLng) will be smoothly animated or false
 * otherwise.
 *
 * optionalZoomLevel can be optionally be provided and if so
 * returns true if map.panTo(destLatLng) would be smoothly animated
 * at optionalZoomLevel.
 **/
function willAnimatePanTo(map, destLatLng, optionalZoomLevel?: any) {
  var dimen = getMapDimenInPixels(map);

  var mapCenter = map.getCenter();
  optionalZoomLevel = !!optionalZoomLevel ? optionalZoomLevel : map.getZoom();

  var destPixel = getPixel(destLatLng, optionalZoomLevel);
  var mapPixel = getPixel(mapCenter, optionalZoomLevel);
  var diffX = Math.abs(destPixel.x - mapPixel.x);
  var diffY = Math.abs(destPixel.y - mapPixel.y);

  return diffX < dimen.width && diffY < dimen.height;
}

/**
 * Returns the optimal zoom value when animating
 * the zoom out.
 *
 * The maximum change will be currentZoom - 3.
 * Changing the zoom with a difference greater than
 * 3 levels will cause the map to "jump" and not
 * smoothly animate.
 *
 * Unfortunately the magical number "3" was empirically
 * determined as we could not find any official docs
 * about it.
 **/
function getOptimalZoomOut(map, latLng, currentZoom) {
  if (willAnimatePanTo(map, latLng, currentZoom - 1)) {
    return currentZoom - 1;
  } else if (willAnimatePanTo(map, latLng, currentZoom - 2)) {
    return currentZoom - 2;
  } else {
    return currentZoom - 3;
  }
}

/**
 * Given a map and a destLatLng, smoothly animates the map center to
 * destLatLng by zooming out until distance (in pixels) between map center
 * and destLatLng are less than map width and height, then panTo to destLatLng
 * and finally animate to restore the initial zoom.
 *
 * optionalAnimationEndCallback can be optionally be provided and if so
 * it will be called when the animation ends
 **/
function smoothlyAnimatePanToWorkarround(map, destLatLng, optionalAnimationEndCallback?: any) {
  var initialZoom = map.getZoom(),
    listener;

  function zoomIn() {
    if (map.getZoom() < initialZoom) {
      map.setZoom(Math.min(map.getZoom() + 3, initialZoom));
    } else {
      google.maps.event.removeListener(listener);

      //here you should (re?)enable only the ui controls that make sense to your app
      map.setOptions({ draggable: true, zoomControl: true, scrollwheel: true, disableDoubleClickZoom: false });

      if (!!optionalAnimationEndCallback) {
        optionalAnimationEndCallback();
      }
    }
  }

  function zoomOut() {
    if (willAnimatePanTo(map, destLatLng)) {
      google.maps.event.removeListener(listener);
      listener = google.maps.event.addListener(map, "idle", zoomIn);
      map.panTo(destLatLng);
    } else {
      map.setZoom(getOptimalZoomOut(map, destLatLng, map.getZoom()));
    }
  }

  //here you should disable all the ui controls that your app uses
  map.setOptions({ draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true });
  map.setZoom(getOptimalZoomOut(map, destLatLng, initialZoom));
  listener = google.maps.event.addListener(map, "idle", zoomOut);
}

export function smoothlyAnimatePanTo(map, destLatLng) {
  if (willAnimatePanTo(map, destLatLng)) {
    map.panTo(destLatLng);
  } else {
    smoothlyAnimatePanToWorkarround(map, destLatLng);
  }
}
