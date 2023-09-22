import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";
import { DrawerMobileSize } from "./AppBarList";

import ShoppingCart from "@mui/icons-material/ShoppingCart";

const ButtonAppBar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const toggle =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setToggleDrawer(open);
    };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <DrawerMobileSize toggleDrawer={toggleDrawer} toggle={toggle} />
            </Grid>
            <Grid item>
              <Grid
                container
                flexDirection="row"
                alignSelf="flex-start"
                xs={4}
                sx={{ backgroundColor: "#ffffff" }}
              >
                <img
                  src="./logo_seven.png"
                  style={{
                    height: "2rem",
                    backgroundColor: "#ffffff",
                    padding: "0.3rem 1rem 0.3rem 1rem",
                    borderRadius: "1rem",
                  }}
                  alt=""
                />
              </Grid>
            </Grid>

            <Grid item>
              <Grid container gap={1}>
                <Grid
                  item
                  container
                  sx={{
                    backgroundColor: "#F4831F",
                    boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                    borderRadius: "50%",
                    width: "2.5rem",
                    height: "2.5rem",
                  }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item>
                    <ShoppingCart
                      sx={{ color: "#ffffff", marginBottom: "-0.2rem" }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default React.memo(ButtonAppBar);
