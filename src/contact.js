import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "./components/nav.js";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Email_Image from "./images/email.png";
import Phone_Image from "./images/phone.png";
import Resume_Image from "./images/resume.png";
import Linkedin_Image from "./images/linkedin.png";
import Github_Image from "./images/github.png";
import Resume from "./documents/Francisco_Martinez_Resume.docx";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const Image = styled.img`
  width: 15%;
`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function Contact() {
  const classes = useStyles();

  return (
    <div>
      <Nav />
      <Typography variant="h1" component="h3">
        Contact
      </Typography>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <a href="mailto:martinezfran63@gmail.com">
                <Image src={Email_Image} alt="Email" />
              </a>
              <Typography variant="h6" component="h3">
                Email
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <a href="tel:7204438668">
                <Image src={Phone_Image} alt="Phone" />
              </a>
              <Typography variant="h6" component="h3">
                Phone
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
            <a href={Resume} download>
              <Image src={Resume_Image} alt="Resume" />
              </a>
              <Typography variant="h6" component="h3">
                Resume
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <a href="https://www.linkedin.com/in/francisco-martinez-jr-51206540">
                <Image src={Linkedin_Image} alt="Linkedin" />
              </a>
              <Typography variant="h6" component="h3">
                Linkedin
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <a href="https://github.com/martinezfran63/">
                <Image src={Github_Image} alt="Github" />
              </a>
              <Typography variant="h6" component="h3">
                Github
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>{" "}
    </div>
  );
}

export default Contact;
