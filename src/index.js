import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

import LandingPage from './views/LandingPage';
import AboutPage from './views/AboutPage';
import ResourcePage from './views/ResourcePage';

var hist = createBrowserHistory();

ReactDOM.render(
  <HashRouter basename="/" history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/about-page" component={AboutPage} />
      <Route path="/resource-page" component={ResourcePage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </HashRouter>,
  document.querySelector("#root")
);
