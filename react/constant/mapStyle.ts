//https://maps.googleapis.com/maps/api/staticmap?key=YOUR_API_KEY&center=37.497701461723494,127.12007816637878&zoom=17&format=png&maptype=roadmap&style=visibility:on&style=element:geometry%7Ccolor:0x242f3e&style=element:geometry.fill%7Cvisibility:on&style=element:geometry.stroke%7Ccolor:0x9e9e9e%7Cvisibility:on%7Cweight:5&style=element:labels.icon%7Ccolor:0x242f3e%7Cvisibility:on%7Cweight:2&style=element:labels.text%7Cvisibility:on&style=element:labels.text.fill%7Ccolor:0x746855&style=element:labels.text.stroke%7Ccolor:0x242f3e&style=feature:administrative.country%7Cvisibility:off&style=feature:administrative.country%7Celement:geometry%7Cvisibility:on&style=feature:administrative.country%7Celement:geometry.fill%7Cvisibility:on&style=feature:administrative.country%7Celement:geometry.stroke%7Ccolor:0x626364%7Cvisibility:on%7Cweight:2&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xd59563&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0xd59563&style=feature:poi.attraction%7Celement:labels.text.fill%7Ccolor:0x5090a5&style=feature:poi.government%7Celement:labels.text.fill%7Ccolor:0x9552a7&style=feature:poi.medical%7Celement:labels.text.fill%7Ccolor:0xa75252&style=feature:poi.park%7Celement:geometry%7Ccolor:0x263c3f%7Cvisibility:on&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x6b9a76&style=feature:road%7Celement:geometry%7Ccolor:0x38414e&style=feature:road%7Celement:geometry.stroke%7Ccolor:0x212a37&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x9ca5b3&style=feature:road.highway%7Celement:geometry%7Ccolor:0x746855&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x1f2835&style=feature:road.highway%7Celement:labels.icon%7Cvisibility:off&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0xf3d19c&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x5a5c6d&style=feature:transit%7Celement:geometry%7Ccolor:0x2f3948&style=feature:transit.line%7Celement:geometry.fill%7Ccolor:0x5a5c6d%7Cweight:1&style=feature:transit.station%7Celement:labels.text.fill%7Ccolor:0xd59563&style=feature:transit.station.airport%7Celement:labels.text.fill%7Ccolor:0x8e9bfb&style=feature:transit.station.bus%7Celement:labels.text.fill%7Ccolor:0x8e9bfb&style=feature:transit.station.rail%7Celement:labels.text.fill%7Ccolor:0x8e9bfb&style=feature:water%7Celement:geometry%7Ccolor:0x17263c&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x515c6d&style=feature:water%7Celement:labels.text.stroke%7Ccolor:0x17263c&size=480x360

export const mapStyleCustom = (isFreezeSlide: boolean) => {
  const grayScale = {
    featureType: "all",
    elementType: "all",
    stylers: [
      { saturation: isFreezeSlide ? 0 : -100 }, // <-- THIS
    ],
  };
  const noIcon = isFreezeSlide
    ? {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      }
    : {
        elementType: "labels.icon",
        stylers: [
          {
            color: "#242f3e",
          },
          {
            visibility: "on",
          },
          {
            weight: 2,
          },
        ],
      };
  return { ...noIcon, ...grayScale };
};

export const mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#9e9e9e",
      },
      {
        visibility: "on",
      },
      {
        weight: 5,
      },
    ],
  },

  {
    featureType: "administrative.province",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#949494",
      },
      {
        weight: 0.5,
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    featureType: "administrative.country",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#626364",
      },
      {
        visibility: "on",
      },
      {
        weight: 2,
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi.attraction",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#5090a5",
      },
    ],
  },
  {
    featureType: "poi.government",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9552a7",
      },
    ],
  },
  {
    featureType: "poi.medical",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#a75252",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#263c3f",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6b9a76",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#38414e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#212a37",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9ca5b3",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#1f2835",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#f3d19c",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#5a5c6d",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#2f3948",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#5a5c6d",
      },
      {
        weight: 1,
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "transit.station.airport",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8e9bfb",
      },
    ],
  },
  {
    featureType: "transit.station.bus",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8e9bfb",
      },
    ],
  },
  {
    featureType: "transit.station.rail",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8e9bfb",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#515c6d",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
];

export const mapStyleGray = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "administrative.province",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#949494",
      },
      {
        weight: 0.5,
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "labels.text.fill",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#5a697c",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2c2c2c",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3c3c3c",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4e4e4e",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d",
      },
    ],
  },
];
