import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

import LandingPage from './views/LandingPage';
import AboutPage from './views/AboutPage';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/about-page" component={AboutPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.querySelector("#root")
);
