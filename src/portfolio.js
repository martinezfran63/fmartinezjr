import React from "react";
import Typing from "react-typing-animation";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Nav from "./components/nav.js";


function Portfolio() {
  return (
    <div>
      <Nav />
      <Typography variant="h1" component="h3">
            Portfolio
          </Typography>
    </div>
  );
}

export default Portfolio;
