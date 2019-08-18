import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1400,
  },
}));


function Education(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" component="h5">{props.title}</Typography>
      <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                 University of Colorado Denver
                </Typography>
                <Typography variant="body2" gutterBottom>
                 Bachelor of Science, Information Systems 
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">2015</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    </div>
  );
}

export default Education;
