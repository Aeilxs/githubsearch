import { Alert, AlertTitle } from "@mui/material";

function Infos({ lastSearch, totalResult }) {
  let severity = "info";
  let title = `Votre recherche: ${lastSearch}`;
  let message = `Nombre de résultat: `;
  if (!lastSearch) {
    severity = "warning";
    title = "Recherche invalide";
    message = "Essayez autre chose !";
  }
  return (
    <Alert
      severity={severity}
      sx={{ marginBottom: "1rem" }}
    >
      <AlertTitle>{title}</AlertTitle>
      {message}
      {severity === "info" && <strong>{totalResult}</strong>}
    </Alert>
  );
}

export default Infos;
