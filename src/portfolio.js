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

function Portfolio() {
    const classes = useStyles();
    return (
      <div>
  
    <div className={classes.root}>
    <Paper className={classes.root}>
    <Typography variant="h5" component="h3">
      This is a sheet of paper.
    </Typography>
    <Typography component="p">
      Paper can be used to build surface or other elements for your application.
    </Typography>
  </Paper>
  
        
      </div>
  
  
  
    </div>
  
    );
  }
  
  export default Portfolio;
  
  





