import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const BackgroundImage = styled("img")(({ theme }) => ({
  position: "fixed",
  top: "3.5rem",
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: "url('./principal.jpeg')",
  backgroundSize: "contain",
  backgroundPosition: "center",
  zIndex: "-1",
}));

export const PageContainer = styled(Grid)(({ theme }) => ({
  padding: "4rem 0.5rem 0 0.5rem",
}));
