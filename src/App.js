import Layout from "./components/layout/Layout";
import { Button, Grid, Typography } from "@material-ui/core";
import SvgCharts from "./svg/SvgCharts";
import CustomCards from "./components/CustomCards";
import PromoTile from "./images/one.png";
import React from "react";

const App = () => {
  return (
    <Layout>
      <Grid container direction={"column"} alignItems={"center"} spacing={6}>
        <Grid item>
          <Grid container direction={"row"} justify={"space-between"}>
            <Grid item sm={12} md={6}>
              <Typography
                variant={"h2"}
                style={{ paddingTop: "4em", fontWeight: "bolder" }}
                gutterBottom
              >
                UFC Calendar - With live updates
              </Typography>
              <Typography variant={"h5"} gutterBottom>
                Conveniently get live updates of UFC events and view
                previous/upcoming events with one click.
              </Typography>
              <Button
                variant={"contained"}
                color="primary"
                href={
                  "https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
                }
                target={"_blank"}
                rel={"noopener noreferrer nofollow"}
                style={{ margin: "2em 0 1em 0", padding: 15 }}
              >
                Download Chrome Extension
              </Button>
              <Typography variant={"subtitle1"} color={"textSecondary"}>
                It's Free!
              </Typography>
            </Grid>
            <Grid item sm={12} md={5} style={{ paddingTop: "11em" }}>
              <img src={PromoTile} alt="logo" height={500} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item id={"features"}>
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
        <Grid item id={"services"}>
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
        <Grid item id={"stats"}>
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
