import { Paper } from "@mui/material";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Repositories from "../Repositories/Repositories";
import "./App.scss";

function App() {
  return (
    <Paper elevation={4}>
      <div className="App">
        <Header />
        <Form />
        <Repositories />
      </div>
    </Paper>
  );
}

export default App;
