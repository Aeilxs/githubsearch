import { Alert, AlertTitle } from "@mui/material";

import "./Repositories.scss";
import Repo from "./Repo/Repo";

function Repositories({ props }) {
  return (
    <>
      <Alert
        severity="warning"
        sx={{ marginBottom: "1rem", border: "1px solid orange" }}
      >
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <div className="cards">
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
      </div>
    </>
  );
}

// @see https://mui.com/material-ui/react-alert/

export default Repositories;
