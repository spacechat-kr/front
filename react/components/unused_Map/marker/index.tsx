import { CSSProperties } from "react";

export const Marker = ({
  text,
  lat,
  lng,
  style,
  type,
  width = 12,
  height = 12,
  color = "#ff453a",
}: {
  text?: string;
  lat?: number;
  lng?: number;
  style?: CSSProperties;
  type?: "circle";
  width?: number;
  height?: number;
  color?: string;
}) => {
  if (type === "circle")
    return (
      <div
        style={{
          border: `1.5px solid white`,
          // outline: `0.5px solid white`,
          width,
          height,
          background: color,
          borderRadius: 100,
          position: "relative",
          left: -width / 2,
          top: -height / 2,
        }}
      />
    );
  return (
    <div
      style={
        style
          ? style
          : {
              width,
              height,
              background: color,
              borderRadius: 4,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
            }
      }
    >
      {text}
    </div>
  );
};
