import React from "react";
// nodejs library that concatenates classes

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import landingPageStyle from "../assets/jss/material-kit-react/views/landingPage.js";
// core components
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";

const dashboardRoutes = [];
class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="white"
          routes={dashboardRoutes}
          brand="MALWAREUNICORN"
          rightLinks={<HeaderLinks />}
          fixed
          {...rest}
        />

      </div>
    );}
  }

export default withStyles(landingPageStyle)(LandingPage);
