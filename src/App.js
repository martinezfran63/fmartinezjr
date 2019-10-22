import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Career from "./career.js";
import Contact from "./contact.js";
import Homepage from "./homepage.js";
import Portfolio from "./portfolio.js";
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {
  ReactGA.initialize('UA-98015814-1');
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/career" component={Career} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
