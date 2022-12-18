export const Version = () => {
  const version = "version 0.1.1";
  return (
    <div style={{ position: "fixed", bottom: 8, width: "100vw", textAlign: "center", maxWidth: 900 }}>
      <p style={{ color: "#787878" }}>{version}</p>
    </div>
  );
};
