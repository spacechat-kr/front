import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { ButtonBase } from "@mui/material";
import { useRouter } from "next/router";

export const ChatCard = ({
  message = "",
  time = "",
  badge = 0,
  name = "",
  profile = "https://picsum.photos/70/70",
}: {
  message?: string;
  time?: string;
  badge?: number;
  name?: string;
  profile?: string;
  }) => {
  const router = useRouter();
  return (
    <ButtonBase
      style={{
        height: 94,
        padding: "0 20px",
        width: "100%",
        background: "white",
      }}
      onClick={()=>router.push('/chat/2')}
    >
      <div
        style={{
          borderBottom: "solid 2px #c4c4c4c2",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "12px 0 12px 0",
        }}
      >
        <div style={{ width: 70, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
          <img alt="chatroomimg" src={profile} style={{ width: 70, height: 70, borderRadius: 15 }} />
        </div>
        <div
          style={{
            width: 100,
            flex: 1,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingLeft: 12,
          }}
        >
          <h5 style={{ color: "black", textAlign: "left", width: "100%" }}>{name}</h5>
          <p
            style={{
              color: "black",
              textAlign: "left",
              width: "100%",
              fontSize: 15,
              maxHeight: 44,
              overflow: "hidden",
            }}
          >
            {message}
          </p>
        </div>
        <div style={{ width: 100, display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", textAlign: "right", width: "100%" }}>
            <span className="time" style={{ width: "100%" }}>
              {time}
            </span>
            <div style={{ display: "flex", justifyContent: "end", height: 25 }}>
              {badge != 0 && (
                <span
                  className="badge"
                  style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  {badge > 99 ? "99+" : badge}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </ButtonBase>
  );
};
export const BackHeader = () => {
	const router = useRouter();
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        background: "white",
        boxShadow: "0px 0 2px rgba(0, 0, 0, 0.15)",
        height: 60,
        display: "flex",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <ButtonBase sx={{ ml: 1.5, borderRadius: 4, padding: 1 }} onClick={()=>router.back()}>
        <ArrowBackIosNewRounded style={{ fontSize: 24, color: "#212121" }} />
      </ButtonBase>
    </div>
  );
};
