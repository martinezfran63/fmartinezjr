import React from "react";
import Typography from "@material-ui/core/Typography";
import Nav from "./components/nav.js";
import WorkExperience from "./career/work_experience.js";
import Education from "./career/education";
import CareerNav from "./components/career_nav.js";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1400
  }
}));

function Career() {
  const classes = useStyles();

  return (
    <div>
      <Nav />
      <Typography variant="h1" component="h3" gutterBottom="true">
        Career
      </Typography>
      <CareerNav />
    </div>
  );
}

export default Career;
