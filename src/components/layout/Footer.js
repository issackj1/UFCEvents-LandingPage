import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button, Link, List, ListItem, Typography } from "@material-ui/core";

const Footer = () => (
  <Grid container justify={"space-around"} style={{ marginTop: "5em" }}>
    <Grid item sm={3} md={3}>
      <Typography variant={"h6"}>About Us</Typography>
      <Typography variant={"body1"}>
        The first UFC browser extension to display all previous/upcoming events
        with live fight results.
      </Typography>
    </Grid>
    <Grid item sm={3} md={3}>
      <Typography variant={"h6"}>Important Links</Typography>
      <List>
        <ListItem style={{ padding: 0 }}>
          <Button
            size={"small"}
            component={Link}
            color="primary"
            target={"_blank"}
            href={
              "https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
            }
            rel={"noopener noreferrer nofollow"}
            style={{ backgroundColor: "transparent" }}
          >
            Terms &amp; Conditions
          </Button>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Button
            size={"small"}
            component={Link}
            color="primary"
            target={"_blank"}
            href={
              "https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
            }
            rel={"noopener noreferrer nofollow"}
            style={{ backgroundColor: "transparent" }}
          >
            Privacy Policy
          </Button>
        </ListItem>
      </List>
    </Grid>
    <Grid item sm={3} md={3}>
      <Typography variant={"h6"}>Social Media</Typography>
      <List>
        <ListItem style={{ padding: 0 }}>
          <Button
            size={"small"}
            component={Link}
            color="primary"
            target={"_blank"}
            href={"https://www.facebook.com/CastleridgeLabs"}
            rel={"noopener noreferrer nofollow"}
            style={{ backgroundColor: "transparent" }}
          >
            Facebook
          </Button>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Button
            size={"small"}
            component={Link}
            color="primary"
            target={"_blank"}
            href={"https://twitter.com/CastleridgeL"}
            rel={"noopener noreferrer nofollow"}
            style={{ backgroundColor: "transparent" }}
          >
            Twitter
          </Button>
        </ListItem>
        <ListItem style={{ padding: 0 }}>
          <Button
            size={"small"}
            component={Link}
            color="primary"
            target={"_blank"}
            href={"#"}
            rel={"noopener noreferrer nofollow"}
            style={{ backgroundColor: "transparent" }}
          >
            Github
          </Button>
        </ListItem>
      </List>
    </Grid>
  </Grid>
);

export default Footer;
