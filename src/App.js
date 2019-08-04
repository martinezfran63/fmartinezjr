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
import Career from "./career.js";
import Contact from "./contact.js";
import Interests from "./interests.js";
import Homepage from "./homepage.js";
import Portfolio from "./portfolio.js";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/career" component={Career} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/interests" component={Interests} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
