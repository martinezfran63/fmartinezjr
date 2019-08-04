import React from 'react';
import Typing from 'react-typing-animation';
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
    root: {
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    paper: {
      padding: theme.spacing(1, 2),
    },
  }));
  
  
  const GlobalStyles = createGlobalStyle`
    body {
      @import url('https://fonts.googleapis.com/css?family=Red+Hat+Text&display=swap');
      font-family: 'Red Hat Text', sans-serif;
    }
    `

function Nav() {
    const classes = useStyles();
    return (
      <div>
  
    <div className={classes.root}>
        <Paper elevation={0} className={classes.paper}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/career" >
            Career       
            </Link>
            <Link color="inherit" href="/portfolio">
            Portfolio
            </Link>
            <Link color="inherit" href="/interests">
            Interests  
            </Link>
            <Link color="inherit" href="/contact">
            Contact
            </Link>
          </Breadcrumbs>
        </Paper>
  
        
      </div>
  
  
  
    </div>
  
    );
  }
  
  export default Nav;
  
  
