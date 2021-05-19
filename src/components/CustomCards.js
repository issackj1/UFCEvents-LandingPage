import React from "react";
import Color from "color";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: ({ color }) => ({
    minWidth: 300,
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: "1rem 1.5rem 1.5rem",
    };
  },
  title: {
    fontFamily: "Keania One",
    fontSize: "2rem",
    color: "#000000",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: "#000000",
    opacity: 0.87,
    marginTop: "2rem",
    fontWeight: 500,
    fontSize: 14,
  },
}));

const CustomCard = ({ classes, title, subtitle }) => {
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card} variant={"outlined"}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={"h2"}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const SolidGameCardDemo = React.memo(function SolidGameCard() {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: "#ffffff" });
  const styles2 = useStyles({ color: "#ffffff" });
  const styles3 = useStyles({ color: "#ffffff" });
  return (
    <>
      <Grid classes={gridStyles} container spacing={4} wrap={"nowrap"}>
        <Grid item>
          <CustomCard
            classes={styles}
            title={"Simple"}
            subtitle={"Intuitive navigation"}
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles2}
            title={"Convenient"}
            subtitle={"One click"}
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles3}
            title={"Fast"}
            subtitle={"Results NOW"}
          />
        </Grid>
      </Grid>
    </>
  );
});
export default SolidGameCardDemo;
