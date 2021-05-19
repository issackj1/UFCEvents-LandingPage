import React from "react";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import logo from "../../images/icon128.png";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar color={"secondary"}>
      <Toolbar>
        <Container>
          <Grid container justify={"space-between"} alignItems={"center"}>
            <Grid item>
              <Grid container direction={"row"} alignItems={"center"}>
                <Grid item>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    href={"/"}
                  >
                    <img src={logo} alt="logo" height={32} width={32} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography variant="h6">UFC Calendar</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Button color="inherit" href={"#features"}>
                Features
              </Button>
              <Button color="inherit" href={"#services"}>
                Services
              </Button>
              <Button color="inherit" href={"#stats"}>
                Stats
              </Button>
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
                Download
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
