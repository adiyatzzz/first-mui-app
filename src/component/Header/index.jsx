import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { AcUnitRounded } from "@material-ui/icons";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  topBar: {
    justifyContent: "space-between",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.topBar}>
        <Typography variant="h6">First React MUI</Typography>
        <AcUnitRounded></AcUnitRounded>
      </Toolbar>
    </AppBar>
  );
}
