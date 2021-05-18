import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import logo from "../../images/icon128.png";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar color={"background"}>
      <Toolbar>
        <Grid container justify={"space-around"} alignItems={"center"}>
          <Grid item>
            <Grid container direction={"row"} alignItems={"center"}>
              <Grid item>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <img src={logo} alt="logo" height={32} width={32} />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography variant="h6" className={classes.title}>
                  UFC Calendar
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Stats</Button>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
