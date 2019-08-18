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


function WorkExperience(props) {
  const classes = useStyles();

  return (
    <div>
       <Typography variant="h3" component="h3">{props.title}</Typography>
      <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Weedmaps
                </Typography>
                <Typography variant="body2" gutterBottom>
                 Quality Engineering Analyst
                </Typography>
                <Typography variant="body2" color="textSecondary">
                <li>Manual black box testing for two Point of Sale applications in the cannabis industry</li>
                <li>Test automation using cucumber</li>
                <li>Review product and design specifications to understand requirements</li>
                <li>Test plan and test case reviews</li>
                <li>Identify test requirements and grow test suites for two applications</li>
                <li>Identify quality issues and escalate based on severity</li>
                <li>Work alongside developers, product owner, and customer service</li>
                <li>Agile/Scrum environment with weekly releases</li>
                <li>Analyzed user flows and behavior to make recommendations on how the product could be improved</li>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">May 2017 - Present</Typography>
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
                  Main Street Exchange
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Quality Assurance Engineer
                </Typography>
                <Typography variant="body2" color="textSecondary">
                <li>Contract role with FinTech startup testing securities compliance engine.</li>
                <li>Manually tested various core features pertaining to the document management system and
                capitulation tables.</li>
                <li>Created regression suite using Selenium Webdriver to test main functionality of the fundraising
                platform.</li>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">January 2017 - February 2017</Typography>
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
    </div>
    </div>
  );
}

export default WorkExperience;
