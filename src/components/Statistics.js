import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const Statistics = () => {
  return (
    <>
      <Grid item id={"stats"}>
        <Typography
          variant={"h4"}
          style={{ paddingTop: "2em", fontWeight: "bolder" }}
          align={"center"}
        >
          Statistics
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          justify={"space-evenly"}
          alignItems={"center"}
          spacing={4}
        >
          <Grid item>
            <Typography variant={"h5"}>150+ Users</Typography>
          </Grid>
          <Grid item>
            <Grid container direction={"column"} alignItems={"center"}>
              <Grid item>
                <Typography variant={"h5"}>Rating</Typography>
              </Grid>
              <Grid item>
                <Rating
                  name="half-rating-read"
                  defaultValue={5}
                  precision={0.5}
                  readOnly
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Statistics;
