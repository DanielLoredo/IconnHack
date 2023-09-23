import AppBar from "./Components/AppBar";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import theme from "./Utils/Theme";
import Principal from "./Pages/Principal";
import FaceRecognition from "./Pages/FaceRecognition";
import Recompensas from "./Pages/Recompensas";
import { QRBackgroundImage } from "./Shared/Styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/reconocimiento-facial" element={<FaceRecognition />} />
        <Route path="/recompensas" element={<Recompensas />} />
        <Route path="/perfil" element={<QRBackgroundImage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
