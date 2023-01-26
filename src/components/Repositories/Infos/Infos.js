import { Alert, AlertTitle } from "@mui/material";

function Infos() {
  return (
    <Alert
      severity="warning"
      sx={{ marginBottom: "1rem", border: "1px solid orange" }}
    >
      <AlertTitle>Error</AlertTitle>
      This is an error alert — <strong>check it out!</strong>
    </Alert>
  );
}

export default Infos;
