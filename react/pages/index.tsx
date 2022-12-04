import Container from "@mui/material/Container";
import Map from "../components/Map";
import { HomeHeader } from "../components/pages/index.module";

export default function Page() {
  // const router = useRouter();

  // useEffect(() => {
  //   if (window.location.pathname == "/") router.push("#home");
  // }, []);
  return (
    <>
      {/* <Head>
        <title>{router.pathname}</title>
      </Head> */}
      <Container maxWidth="md" style={{ padding: 0 }}>
        {/* <button onClick={() => router.push("#map")}>map</button>
      <button onClick={() => router.push("#option")}>option</button>
      <button onClick={() => router.push("#roomList")}>roomList</button> */}
        <HomeHeader />
        {/* <div style={{height: "100vh" }}> */}
        <Map />
        {/* </div> */}
      </Container>
    </>
  );
}
