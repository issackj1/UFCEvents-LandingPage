import Layout from "./components/layout/Layout";
import { Button, Grid, Typography } from "@material-ui/core";
import SvgCharts from "./svg/SvgCharts";
import CustomCards from "./components/CustomCards";
import React from "react";
import { Rating } from "@material-ui/lab";
import Home from "./components/Home";
import HeroImage from "./svg/HeroImage";
import SpoilerImage from "./svg/SpoilerImage";

const App = () => {
  return (
    <Layout>
      <Grid
        container
        direction={"column"}
        justify={"space-between"}
        alignItems={"stretch"}
        spacing={10}
      >
        <Grid item>
          <Home />
        </Grid>
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
        <Grid item id={"stats"}>
          <Typography
            variant={"h4"}
            style={{ paddingTop: "2em", fontWeight: "bolder" }}
            align={"center"}
          >
            Statistics
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            justify={"space-evenly"}
            alignItems={"center"}
            spacing={4}
          >
            <Grid item>
              <Typography variant={"h5"}>30+ Users</Typography>
            </Grid>
            <Grid item>
              <Grid container direction={"column"} alignItems={"center"}>
                <Grid item>
                  <Typography variant={"h5"}>Rating</Typography>
                </Grid>
                <Grid item>
                  <Rating
                    name="half-rating-read"
                    defaultValue={5}
                    precision={0.5}
                    readOnly
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography align={"center"}>
            <Button
              variant={"contained"}
              color="primary"
              href={
                "https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
              }
              target={"_blank"}
              rel={"noopener noreferrer nofollow"}
              style={{ padding: 15 }}
            >
              Get UFC Calendar Now
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default App;
