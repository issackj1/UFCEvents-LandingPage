import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link, List, ListItem, Typography } from "@material-ui/core";

const Footer = () => (
  <Grid container justify={"space-around"} style={{ paddingTop: 60 }}>
    <Grid item md={3}>
      <Typography variant={"h6"}>About Us</Typography>
      <Typography variant={"body1"}>
        Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.
      </Typography>
    </Grid>
    <Grid item md={3}>
      <Typography variant={"h6"}>Important Links</Typography>
      <List>
        <ListItem>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Terms &amp; Conditions
          </Link>
        </ListItem>
        <ListItem>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Privacy Policy
          </Link>
        </ListItem>
      </List>
    </Grid>
    <Grid item md={3}>
      <Typography variant={"h6"}>Social Media</Typography>
      <List>
        <ListItem>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Dev.to
          </Link>
        </ListItem>
        <ListItem>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Twitter
          </Link>
        </ListItem>
        <ListItem>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            GitHub
          </Link>
        </ListItem>
      </List>
    </Grid>
  </Grid>
);

export default Footer;
