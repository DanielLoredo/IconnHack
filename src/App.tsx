import AppBar from "./Components/AppBar";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import theme from "./Utils/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/home" element={<div>Hola</div>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
