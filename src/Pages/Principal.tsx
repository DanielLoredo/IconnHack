import React from "react";
import { Grid, Typography } from "@mui/material";
import { PageContainer } from "../Shared/Styles";

import LocationOnIcon from "@mui/icons-material/LocationOn";

const Principal = () => {
  return (
    <PageContainer container direction="column" color="#000000">
      {/* <BackgroundImage /> */}

      <Grid item container justifyContent="flex-end">
        <Grid
          item
          container
          justifyContent="flex-end"
          sx={{
            borderRadius: "2rem",
            border: "2px solid #028262",
            width: "40%",
            padding: "0.2rem 0.5rem 0.2rem 0.5rem",
          }}
        >
          <Typography fontWeight="600" fontSize="1.2rem">
            Torre Iconn
          </Typography>
          <LocationOnIcon
            sx={{
              height: "1.8rem",
              color: "#EA1D23",
              marginBottom: "-0.2rem",
            }}
          />
        </Grid>
      </Grid>
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
