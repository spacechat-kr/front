import Container from "@mui/material/Container";
import MapContainer from "../components/Map/MapContainer";
// import Map from "../components/Map";
import { HomeHeader } from "../components/pages/index/HomeHeader";
import { MapNavigation } from "../components/pages/index/MapNavigation";
import { CreateModal } from "../components/pages/index/CreateModal";

export default function Page() {
  return (
    <>
      <Container maxWidth="md" style={{ padding: 0 }}>
        <HomeHeader />
        <div style={{ display: "flex", flexDirection: "column", maxHeight: "100vh" }}>
          <MapContainer />
          <MapNavigation />
          <CreateModal />
        </div>
      </Container>
    </>
  );
}

export const InputTitleStyle = {
  fontFamily: "AppleSDGothicNeo",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "41px",
  letterSpacing: "-0.4px",
  border: "none",
  padding: "0",
  outline: "none",
};
export const InputDescStyle = {
  fontFamily: "AppleSDGothicNeo",
  fontWeight: 400,
  fontSize: 15,
  lineHeight: "22px",
  letterSpacing: "-0.4px",
  border: "none",
  paddingLeft: 10,
  paddingRight: 10,
  borderRadius: 2,
  height: "2.5em",
};
