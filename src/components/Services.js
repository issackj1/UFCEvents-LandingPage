import React from "react";
import { Grid, Typography } from "@material-ui/core";
import SvgCharts from "../svg/SvgCharts";
import HeroImage from "../svg/HeroImage";
import SpoilerImage from "../svg/SpoilerImage";

const Services = () => {
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
            <Typography
              variant={"h4"}
              style={{ paddingTop: "2em", fontWeight: "bolder" }}
            >
              Live Updates
            </Typography>
            <Typography variant={"subtitle1"}>
              Real-time updates of events showing our users content changes
            </Typography>
          </Grid>
          <Grid item sm={12} md={5} style={{ paddingTop: "3em" }}>
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
          <Grid item sm={12} md={5} style={{ paddingTop: "3em" }}>
            <HeroImage />
          </Grid>
          <Grid item sm={12} md={6}>
            <Typography
              variant={"h4"}
              style={{ paddingTop: "2em", fontWeight: "bolder" }}
            >
              Event Analysis
            </Typography>
            <Typography variant={"subtitle1"}>
              We allow fight fans to easily see dates and times of upcoming
              fights (in their local timezone) eliminating the need to search
              for events on the internet.
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
            <Typography variant={"h4"} style={{ fontWeight: "bolder" }}>
              Disable Spoilers
            </Typography>
            <Typography variant={"subtitle1"}>
              View fight of the night and performance of the night without
              seeing the result.
            </Typography>
          </Grid>
          <Grid item sm={12} md={5}>
            <SpoilerImage />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
