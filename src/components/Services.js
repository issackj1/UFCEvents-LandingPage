import React from "react";
import { Grid, Typography } from "@material-ui/core";
import SvgCharts from "../svg/SvgCharts";
import HeroImage from "../svg/HeroImage";
import SpoilerImage from "../svg/SpoilerImage";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    paddingTop: "2em",
    fontWeight: "bolder",
  },
}));

const Services = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item id={"services"}>
        <Grid
          container
          direction={"row"}
          justify={"space-between"}
          alignItems={"center"}
        >
          <Grid item sm={12} md={5}>
            <Typography variant={"h4"} className={classes.title}>
              🚫 SPOILER ALERTS 🚫
            </Typography>
            <Typography variant={"subtitle1"}>
              Enable spoiler alerts to hide the result of fights until you
              decide to uncover it. We also inform you which fights were awarded
              bonuses such as the Fight of the Night and Performance of the
              Night without spoiling the result.{" "}
            </Typography>
          </Grid>
          <Grid item sm={12} md={5}>
            <SpoilerImage />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction={"row"}
          justify={"space-between"}
          alignItems={"center"}
        >
          <Grid item sm={12} md={5}>
            <HeroImage />
          </Grid>
          <Grid item sm={12} md={6}>
            <Typography variant={"h4"} className={classes.title}>
              🌎 FIGHT TIMES IN YOUR TIMEZONE 🌍
            </Typography>
            <Typography variant={"subtitle1"}>
              All fight times are automatically converted to your local time
              zone so you will know exactly when an event starts for you.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction={"row"}
          justify={"space-between"}
          alignItems={"center"}
        >
          <Grid item sm={12} md={6}>
            <Typography variant={"h4"} className={classes.title}>
              💥 LIVE FIGHT UPDATES 💥
            </Typography>
            <Typography variant={"subtitle1"}>
              The result of each fight is uploaded seconds after it is
              announced. If you are a fan that only tunes in during the main
              event, this is the most convenient way to view which fights have
              passed and decide when to tune in.
            </Typography>
          </Grid>
          <Grid item sm={12} md={5}>
            <SvgCharts viewBox={"-100 0 1700 784.41"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction={"row"}
          justify={"space-between"}
          alignItems={"center"}
        >
          <Grid item sm={12} md={5}>
            <HeroImage />
          </Grid>
          <Grid item sm={12} md={6}>
            <Typography variant={"h4"} className={classes.title}>
              📊 FIGHT STATISTICS 📊
            </Typography>
            <Typography variant={"subtitle1"}>
              From the Tale of the Tape to fight statistics such as knockdowns,
              significant strikes, and takedowns, our chrome extension will
              satisfy all of your data needs.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
