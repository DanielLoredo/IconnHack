import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const BackgroundImage = styled("img")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "110%",
  backgroundImage: "url('./principal.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: "-1",
}));

export const PageContainer = styled(Grid)(({ theme }) => ({
  padding: "4rem 0.5rem 0 0.5rem",
}));
