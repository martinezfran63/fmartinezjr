import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "./components/nav.js";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Email_Image from "./images/email.png";
import Phone_Image from "./images/phone.png";
import Resume_Image from "./images/resume.png";
import Linkedin_Image from "./images/linkedin.png";
import Github_Image from "./images/github.png";


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

function Contact() {
  const classes = useStyles();

  return (
    <div>
      <Nav />
      <Typography variant="h1" component="h3">
        Contact
      </Typography>

      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Email"
          height="140"
          image={Email_Image}
          title="Email"
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Email
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Phone"
          height="140"
          image={Phone_Image}
          title="Phone"
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Phone
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Resume"
          height="140"
          image={Resume_Image}
          title="Resume"
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Resume
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Github"
          height="140"
          image={Github_Image}
          title="Github"
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Github
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Linkedin"
          height="140"
          image={Linkedin_Image}
          title="Linkedin"
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Linkedin
        </Button>
      </CardActions>
    </Card>

    


    </div>
  );
}

export default Contact;
