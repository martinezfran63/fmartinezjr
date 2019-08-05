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


function Education() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  IMM (Ideas Made Measurable)
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Quality Assurance Engineer
                </Typography>
                <Typography variant="body2" color="textSecondary">
                <li>Tested Lamp stack web pages for a fast-paced digital marketing agency.</li>
                <li>Created test plans according to design comps and functional specifications.</li>
                <li>Manual testing for various clients: TracFone, TrueBlue, Straight Talk, Net10 Wireless, etc.</li>
                <li>Took initiative to automate phone catalog verification for TracFone brands using Selenium Webdriver. Automation effort saved account executive 1 hour a day per phone brand.</li>
                <li>Received multiple change requests that required merging and deploying code to staging and production environments multiple times a day.</li>
                <li>Tested timers that display different hero images for holiday promotions that were responsible for most of the digital sales for the TracFone brands during the holiday season.</li>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">September 2016 - December 2016</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  University of Colorado
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Quality Assurance Engineer
                </Typography>
                <Typography variant="body2" color="textSecondary">
                <li>Performance and functional testing of the Enterprise Portal used by over 50,000 students at the four CU campuses.</li>
                <li>Developed, maintained, and executed test plans for crucial applications relating to admissions, enrollment, financing, & degree audit.</li>
                <li>Took initiative to transition existing test cases to Selenium Webdriver.</li>
                <li>Worked with project management, application developers, and business administrators to ensure testing was completed for Elevate project. Elevate was a 2-year project that upgraded the HCM and Finance systems at the simultaneously. </li>
                <li>Provided monitoring of user load and detection of errors using LoadUi during performance tests. These tests were crucial in ensuring system stability during peak student enrollment during the spring and fall semesters. </li>
                <li>Created SDLC document to assist leadership in SDLC improvements.</li>
                <li>Documented Change Management process from Jira which gave system administers a workflow for the Change Management module in Cherwell. </li>
                <li>Took initiative to perform QA activities during crucial Maintenance Windows during non-business hours.</li>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">June 2014 - March 2016</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Typography variant="h4" component="h3" gutterBottom="true">
        Education
      </Typography>
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
