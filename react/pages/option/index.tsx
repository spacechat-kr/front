import Container from "@mui/material/Container";
import { memo } from "react";
import { ExportModal } from "../../components/pages/option";
import { MenuBox } from "../../components/pages/option/MenuBox";
import { MenuList } from "../../components/pages/option/MenuList";
import { OptionHeader } from "../../components/pages/option/OptionHeader";
import { Version } from "../../components/pages/option/Version";

export default function Page() {
  return (
    <>
      <Container maxWidth="md" style={{ padding: 0, background: "white", height: "100vh" }}>
        <OptionHeader />
        <div style={{ display: "flex", flexDirection: "column", maxHeight: "100vh" }}>
          <MenuBox />
          <MenuList />
          <Version />
          <ExportModal />
        </div>
      </Container>
    </>
  );
}
