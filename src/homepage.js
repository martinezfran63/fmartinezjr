import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Typing from "react-typing-animation";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Nav from "./components/nav.js";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center",
    flexWrap: "wrap"
  },
  paper: {
    padding: theme.spacing(1, 2)
  }
}));

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Red+Hat+Text&display=swap');
    font-family: 'Red Hat Text', sans-serif;
  }
  `;

const H1 = styled.h1`
font-weight: bold;
color: black;
font-size: 14em
margin: 0.5rem 1rem;
`;

function Homepage() {
  const classes = useStyles();
  return (
    <div>
      <Nav />

      <Typing speed={50}>
        <GlobalStyles />
        <H1>francisco martinez jr</H1>
      </Typing>
    </div>
  );
}

export default Homepage;
