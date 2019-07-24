import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

import LandingPage from './views/LandingPage';
import AboutPage from './views/AboutPage';
import ResourcePage from './views/ResourcePage';
import WorkshopPage from './views/WorkshopPage';
import DownloadsPage from './views/DownloadsPage';

var hist = createBrowserHistory();

ReactDOM.render(
  <HashRouter basename="/" history={hist}>
    <Switch>
      <Route path="/home" component={LandingPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/resources" component={ResourcePage} />
      <Route path="/workshops" component={WorkshopPage} />
      <Route path="/downloads" component={DownloadsPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </HashRouter>,
  document.querySelector("#root")
);
