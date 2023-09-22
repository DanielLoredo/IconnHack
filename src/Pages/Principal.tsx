import React from "react";
import { Grid, Typography } from "@mui/material";
import { PageContainer } from "../Shared/Styles";

const Principal = () => {
  return (
    <PageContainer container direction="column" color="#000000">
      {/* <BackgroundImage /> */}
      <Grid item container direction="column">
        <Typography fontSize="1rem" fontWeight="600">
          Promociones exclusivas
        </Typography>
        <Grid item container xs={2} padding="0.3rem">
          <Grid item padding="0.2rem">
            <img
              src="./cupon1.jpeg"
              style={{
                height: "5.6rem",
              }}
              alt=""
            />
          </Grid>
          <Grid item padding="0.1rem 0.2rem 0.2rem 0.2rem">
            <img
              src="./cupon2.jpeg"
              style={{
                height: "5.8rem",
              }}
              alt=""
            />
          </Grid>
          <Grid item padding="0.2rem 0.2rem 0.2rem 0.2rem">
            <img
              src="./cupon3.jpeg"
              style={{
                height: "5.9rem",
              }}
              alt=""
            />
          </Grid>
          <Grid item padding="0.2rem">
            <img
              src="./cupon1.jpeg"
              style={{
                height: "5.6rem",
              }}
              alt=""
            />
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};
export default Principal;
