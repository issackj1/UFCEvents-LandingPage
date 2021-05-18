import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button, Link, List, ListItem, Typography } from "@material-ui/core";

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
          <Button
            size={"small"}
            color="primary"
            target={"_blank"}
            href={"https://www.facebook.com/CastleridgeLabs"}
            rel={"noopener noreferrer nofollow"}
          >
            Facebook
          </Button>
        </ListItem>
        <ListItem>
          <Button
            size={"small"}
            color="primary"
            target={"_blank"}
            href={"https://twitter.com/CastleridgeL"}
            rel={"noopener noreferrer nofollow"}
          >
            Twitter
          </Button>
        </ListItem>
        <ListItem>
          <Button
            size={"small"}
            color="primary"
            target={"_blank"}
            href={"#"}
            rel={"noopener noreferrer nofollow"}
          >
            Github
          </Button>
        </ListItem>
      </List>
    </Grid>
  </Grid>
);

export default Footer;
