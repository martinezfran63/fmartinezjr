import React from "react";
import Typing from "react-typing-animation";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Education from "../career/education.js";
import WorkExperience from "../career/work_experience";
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


class CareerNav extends React.Component {
  constructor(props) {
    super(props);

    // Must initialize state first
    this.state = { 
      on: false

     };

     this.handleClick = this.handleClick.bind(this)

  }


  handleClick() {
    this.setState({
      on: !this.state.on
    }
    

    );


  
 
  }


  render() {
    
    return (
      <div>
        <div className>
          <Paper elevation={0}>
          
          <ChevronLeftIcon onClick={this.handleClick}><Link>Work Experience {this.state.link} </Link></ChevronLeftIcon>
          <ChevronRightIcon onClick={this.handleClick}><Link>Work Experience {this.state.link} </Link></ChevronRightIcon>
          {this.state.on && <Education title="Education"/>}
          {!this.state.on && <WorkExperience title="Work Experience" />}

          </Paper>
        </div>
      </div>
    );
  }
}

export default CareerNav;
