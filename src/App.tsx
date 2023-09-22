import AppBar from "./Components/AppBar";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import theme from "./Utils/Theme";
import Principal from "./Pages/Principal";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Principal />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
