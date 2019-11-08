import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "./components/nav.js";
import Typography from "@material-ui/core/Typography";
import Email_Image from "./images/email.png";
import Phone_Image from "./images/phone.png";
import Resume_Image from "./images/resume.png";
import Linkedin_Image from "./images/linkedin.png";
import Github_Image from "./images/github.png";
import Menu_1 from "./images/menu_1_frutuas_preparadas.jpg";
import Resume from "./documents/Francisco_Martinez.pdf";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const Image = styled.img`
    background-size:contain;
    background-position:top;
    background: cover;
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

function Rinconcito_Menu() {
  const classes = useStyles();

  return (
  <Image src={Menu_1} alt="Menu_1" />
  )
}

export default Rinconcito_Menu;
