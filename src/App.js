import React, { useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Career from "./career.js";
import Contact from "./contact.js";
import Homepage from "./homepage.js";
import Portfolio from "./portfolio.js";
import Rinconcito_Menu from "./rinconcito_menu.js";
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const trackingId = "UA-98015814-1";
ReactGA.initialize(trackingId);
const browserHistory = createBrowserHistory()
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search)
})

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/career" component={Career} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/rinconcito_menu" component={Rinconcito_Menu} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
