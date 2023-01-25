import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function Form() {
  const [elevation, setElevation] = useState(1);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <Paper
      elevation={elevation}
      component="form"
      onSubmit={(e) => handleSubmit(e)}
      sx={{
        p: "2px 4px",
        display: "flex",
        width: "100%",
        marginBottom: "1rem",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Recherchez un repo :)"
        inputProps={{ "aria-label": "search google maps" }}
        onFocus={() => setElevation(4)}
        onBlur={() => setElevation(1)}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default Form;
