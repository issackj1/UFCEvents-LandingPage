import React from "react";
import { Grid, Typography } from "@material-ui/core";
import CustomCards from "./CustomCards";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: { paddingTop: "2em", fontWeight: "bolder" },
}));

const Features = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item id={"features"}>
        <Typography variant={"h4"} align={"center"} className={classes.title}>
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
