import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
       <Typography variant="h5" component="h5">{props.title}</Typography>
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
                 Quality Engineer
                </Typography>
                <Typography variant="body2" color="textSecondary">
                <li>Quality Assurance testing of two Point of Sale applications: Weedmaps Retail and MMJMenu</li>
                <li>Manual black box testing of CRM, Inventory, Store, Dashboard, Reports, Compliance (METRC), and Weedmaps Integration</li>
                <li>Test plan and test case reviews</li>
                <li>Maintain two test suites using Testrails</li>
                <li>Identify quality issues and escalate based on severity</li>
                <li>Test automation using Cucumber for MMJMenu</li>
                <li>API testing using Postman</li>
                <li>Physical hardware testing (iPad, Elo PayPoint, Receipt Printer, Label Printer, Barcode Scanner)</li>
                <li>Worked with offshore QA resources to ensure WM Retail test cases were properly automated</li>
                <li>Review product and design specifications to understand requirements</li>
                <li>Work with team consisting of Developers, Product Owner, and Customer Service</li>
                <li>Agile environment with weekly releases</li>
                <li>Analyzed user flows and behavior to make recommendations on how the product could be improved</li>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">May 2017 - December 2019</Typography>
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
                <li>Used Selenium Webdriver to automate main functionality of the fundraising platform.</li>
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
                <li>Tested software for a fast-paced digital marketing agency.</li>
                <li>Created test plans according to design comps and functional specifications.</li>
                <li>Manual testing for various clients: TracFone, TrueBlue, Straight Talk, Net10 Wireless</li>
                <li>Automated phone catalog verification for TracFone brands using Selenium Webdriver. Automation effort saved account executive 1 hour a day per phone brand.</li>
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
                <li>Functional testing of the Enterprise Portal used by over 50,000 students at the four campuses.</li>
                <li>Developed, maintained, and executed test plans for crucial areas relating to admissions, enrollment, & billing.</li>
                <li>Transition existing test cases to Selenium Webdriver.</li>
                <li>Worked with project management, application developers, and business administrators to ensure testing was completed. </li>
                <li>Testing for a 2-year project that upgraded the HCM and Finance systems.</li>
                <li>Provided monitoring of user load and detection of errors using LoadUi during performance tests.</li>
                <li>Performed QA activities during crucial Maintenance Windows during non-business hours.</li>
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
