import Layout from "./components/layout/Layout";
import { Button, Grid, Typography } from "@material-ui/core";
import SvgCharts from "./svg/SvgCharts";
import CustomCards from "./components/CustomCards";
import PromoTile from "./images/Promo-tile.png";
import React from "react";

const App = () => {
  return (
    <Layout>
      <Grid container direction={"column"} alignItems={"center"} spacing={3}>
        <Grid item>
          <Typography
            variant={"h3"}
            style={{ paddingTop: "2em", fontWeight: "bolder" }}
          >
            UFC Calendar - With live updates
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={"subtitle1"} gutterBottom>
            Conveniently get live updates of UFC events and view
            previous/upcoming events with one click.
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant={"contained"}
            color="primary"
            href={
              "https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
            }
            target={"_blank"}
            rel={"noopener noreferrer nofollow"}
          >
            Download Chrome Extension
          </Button>
        </Grid>
        <Grid item>
          <Typography variant={"subtitle2"} color={"textSecondary"}>
            It's Free!
          </Typography>
        </Grid>
        <img src={PromoTile} alt="logo" height={400} />
        <Grid item>
          <Typography
            variant={"h4"}
            style={{ paddingTop: "2em", fontWeight: "bolder" }}
          >
            Main Features
          </Typography>
        </Grid>
        <Grid item>
          <CustomCards />
        </Grid>
        <Grid item>
          <Typography
            variant={"h4"}
            style={{ paddingTop: "2em", fontWeight: "bolder" }}
          >
            Event Analysis
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={"subtitle1"}>
            We allow fight fans to easily see dates and times of upcoming fights
            (in their local timezone) eliminating the need to search for events
            on the internet.
          </Typography>
          <SvgCharts />
        </Grid>
        <Grid item>
          <Typography
            variant={"h4"}
            style={{ paddingTop: "2em", fontWeight: "bolder" }}
          >
            Statistics
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default App;
