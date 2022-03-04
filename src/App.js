import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Maincomponent from "./component/Maincomponent";
import Navbar from "./component/Navbar";
// import { light } from "@mui/material/styles/createPalette";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#333",
    },
  },
});
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar>
          <Maincomponent />
        </Navbar>
      </ThemeProvider>
    </div>
  );
}

export default App;
