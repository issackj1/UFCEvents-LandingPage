import React from "react";
import { Grid, Typography } from "@material-ui/core";
import CustomCards from "./CustomCards";

const Features = () => {
  return (
    <>
      <Grid item id={"features"}>
        <Typography
          variant={"h4"}
          style={{ paddingTop: "2em", fontWeight: "bolder" }}
          align={"center"}
        >
          Main Features
        </Typography>
      </Grid>
      <Grid item>
        <CustomCards />
      </Grid>
    </>
  );
};

export default Features;
