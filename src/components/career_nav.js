import React from "react";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Education from "../career/education.js";
import WorkExperience from "../career/work_experience";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Grid from "@material-ui/core/Grid";

class CareerNav extends React.Component {
  constructor(props) {
    super(props);

    // Must initialize state first
    this.state = {
      on: false,
      title: "Work"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      on: !this.state.on
    });
  }

  render() {
    return (
      <div>
        <div className>
          <Paper elevation={0}>
            <div>
              <Grid container spacing={3}>
                <Grid item xs={.1}>

                    <ChevronLeftIcon onClick={this.handleClick}>
                      <Link> {this.state.link} </Link>
                    </ChevronLeftIcon>
                    <ChevronRightIcon onClick={this.handleClick}>
                      <Link>{this.state.link} </Link>
                    </ChevronRightIcon>

                </Grid>
                <Grid item xs={11}>
                  {this.state.on && <Education title="Education" />}
                  {!this.state.on && <WorkExperience title="Work Experience" />}
                </Grid>
              </Grid>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default CareerNav;
