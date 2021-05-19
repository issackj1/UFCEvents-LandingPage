import Layout from "./components/layout/Layout";
import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import Home from "./components/Home";
import Features from "./components/Features";
import Services from "./components/Services";
import Statistics from "./components/Statistics";

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
        <Home />
        <Features />
        <Services />
        <Statistics />
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
