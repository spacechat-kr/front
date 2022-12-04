import Container from "@mui/material/Container";
import Map from "../components/Map";
import { HomeHeader } from "../components/pages/index.module";

export default function Page() {
  return (
    <>
      <Container maxWidth="md" style={{ padding: 0 }}>
        <HomeHeader />
        <Map />
      </Container>
    </>
  );
}
