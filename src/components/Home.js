import { Button, Grid, Typography } from "@material-ui/core";
import PromoTile from "../images/one.png";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    paddingTop: "4em",
    fontWeight: "bolder",
  },
  button: {
    margin: "2em 0 1em 0",
    padding: 15,
  },
  promoTile: {
    paddingTop: "11em",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid item>
      <Grid container direction={"row"} justify={"space-between"}>
        <Grid item sm={12} md={6}>
          <Typography variant={"h2"} className={classes.title} gutterBottom>
            UFC Calendar
          </Typography>
          <Typography variant={"h5"} gutterBottom>
            Conveniently get live updates of UFC events and view
            previous/upcoming events with one click.
          </Typography>
          <Button
            variant={"contained"}
            href={
              "https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
            }
            color={"primary"}
            target={"_blank"}
            rel={"noopener noreferrer nofollow"}
            className={classes.button}
          >
            Download Chrome Extension
          </Button>
          <Typography variant={"subtitle1"} color={"textSecondary"}>
            It's Free!
          </Typography>
        </Grid>
        <Grid item sm={12} md={5} className={classes.promoTile}>
          <img src={PromoTile} alt="logo" height={500} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
