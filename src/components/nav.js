import React from 'react';
import { createGlobalStyle } from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from "react-router-dom";
import redhat from '../fonts/Red_Hat_Text/RedHatText-Regular.ttf';
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
    root: {
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    paper: {
      padding: theme.spacing(1, 2),
    },
  }));

  const StyledLink = styled(Link)`
      color: #999999;
      text-decoration: none;

  `;

  const GlobalStyles = createGlobalStyle`
    body {
      @import url(${redhat});
      font-family: 'Red Hat Text', sans-serif;
    }
    `
    
function Nav() {
    const classes = useStyles();
    return (
      <div>
        <GlobalStyles/>
  
    <div className={classes.root}>
        <Paper elevation={0} className={classes.paper}>
          <Breadcrumbs aria-label="breadcrumb">
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/career">Career</StyledLink>
          <StyledLink to="/portfolio">Portfolio</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
          </Breadcrumbs>
        </Paper>
  
        
      </div>
  
  
  
    </div>
  
    );
  }
  
  export default Nav;
  
  
