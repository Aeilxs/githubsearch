import { Alert } from "@mui/material";

function Infos({ totalResult }) {
  if (totalResult > 0) {
    return (
      <Alert
        severity="success"
        sx={{ marginBottom: "1rem" }}
      >
        La recherche a donné {totalResult} résultat
        {totalResult > 1 && "s"}
      </Alert>
    );
  }
}

export default Infos;
