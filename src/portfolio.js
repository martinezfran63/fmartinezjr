import React from "react";
import Typography from "@material-ui/core/Typography";
import Nav from "./components/nav.js";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Divider } from "@material-ui/core";
import ACDP from "./images/AC&DP.png";
import Rinconcito from "./images/rinconcito_logo_big.png";
import styled from "styled-components";
import Link from "@material-ui/core/Link";

const Image = styled.img`
  width: 30%;
`;

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

function Portfolio() {
  const classes = useStyles();

  return (
    <div>
      <Nav />
      <Typography variant="h1" component="h3" gutterBottom="true">
        Portfolio
      </Typography>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h3">
          <Link href="http://rinconcito.fmartinezjr.com">
            Rinconcito Restaurant Menu
          </Link>
        </Typography>
        <Typography component="p">
          This digital signage lets customers knows the items they can order.
        </Typography>
        <Image src={Rinconcito} alt="Logo" />
        <Divider variant="fullWidth" />
        <Typography variant="h4" component="h3">
          <Link href="http://allegiantconstructionpros.com/">
            Allegiant Construction Professionals
          </Link>
        </Typography>
        <Typography component="p">
          Construction business specializing in drywall
        </Typography>
        <Image src={ACDP} alt="Logo" />
      </Paper>
    </div>
  );
}

export default Portfolio;
