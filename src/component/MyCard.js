import React from "react";
import { Grid, Divider, Paper, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import EditIcon from "@mui/icons-material/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  backGroundLight: {
    background: "#f8f8f8",
  },
  gapZero: {
    padding: 0,
    margin: "0 0 14px 0",
  },
  textAlignCenter: {
    textAlign: "center",
  },
  textAlignLeft: {
    textAlign: "left",
  },
  textAlignRight: {
    textAlign: "right",
  },
  paddings: {
    padding: "14px 0",
  },
  paddingOne: {
    padding: "1rem",
  },
  paddingLeft: {
    paddingLeft: "1rem",
  },
}));

export default function Maincomponent({ heading, children }) {
  const classes = useStyles();
  return (
    <Paper sx={{ marginBottom: "1rem" }} variant="outlined">
      <div
        className={` ${classes.backGroundLight} ${classes.textAlignLeft}  ${classes.paddings}`}
      >
        <Grid container>
          <Grid xs={6}>
            <h2 className={`${classes.paddingLeft} ${classes.gapZero}`}>
              {heading}
            </h2>
          </Grid>
          <Grid xs={6} className={`${classes.textAlignRight}`}>
            <IconButton component="span">
              <EditIcon sx={{ color: "#99ca3b" }} />
            </IconButton>
          </Grid>
        </Grid>
        <Divider />
      </div>
      <div className={classes.paddingOne}>{children}</div>
    </Paper>
  );
}
