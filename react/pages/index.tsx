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
