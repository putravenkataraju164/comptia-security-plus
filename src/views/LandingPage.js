import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import landingPageStyle from "../assets/jss/material-kit-react/views/landingPage.js";
// core components
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import SvgIcon from '@material-ui/core/SvgIcon';

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
        <Parallax filter image={require("assets/img/purple-blur-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Welcome!</h1>
                <h4>
                  Malwareunicorn.org provides workshops and resources for
                  reverse engineering in the infosec space.
                  Workshop content is coming soon. ETA May 1st.
                </h4>
                <br />
              </GridItem>

            </GridContainer>
          </div>
        </Parallax>
      </div>
    );}
  }

export default withStyles(landingPageStyle)(LandingPage);
