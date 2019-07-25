import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import workshopPageStyle from "../assets/jss/material-kit-react/views/workshopPage.js";
// core components
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { Link } from "react-router-dom";

const dashboardRoutes = [];

class DownloadsPage extends React.Component {
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
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container} >
            <div className={classes.title}>
              <h2 className={classes.title}>Downloads</h2>
            </div>
            <div className={classes.section}>
            <h3>Virtual Machines</h3>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6} lg={4}>
              <Card >
                <CardBody>
                <Button color="rose" compontent="a" href="https://drive.google.com/file/d/15Qm4iDdpLyqbLDS_hoBkY0TpVGgSWKJn/view?usp=sharing">Download</Button>
                <h5>Sniffer VM</h5>
                <p>OS: Lubuntu</p>
                <p>username: Sniffer</p>
                <p>password: re1012019</p>
                <p>VirtualBox network: re101net</p>
                <p>IPAddress: 10.10.10.112</p>
                <p>Gateway:10.10.10.112</p>
                <p>Size: 2.7 GB zip, 7G unzip</p>
                <small className={classes.cardDate}>Published July 23, 2019</small>

                </CardBody>
                <CardFooter>

                </CardFooter>
              </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={6} lg={4}>
              <Card >
                <CardBody>
                <Button color="rose" compontent="a" href="https://drive.google.com/file/d/1hGFZz-lLQLWPJMofp-dm4Ojen9yF0F2X/view?usp=sharing">Download</Button>
                <h5>Victim VM</h5>
                <p>OS: Windows 10</p>
                <p>username: Victim</p>
                <p>password: re1012019</p>
                <p>VirtualBox network: re101net</p>
                <p>IPAddress: 10.10.10.111</p>
                <p>Gateway:10.10.10.112</p>
                <p>Size: 12 GB zip, 23G unzip</p>
                <small className={classes.cardDate}>Published July 23, 2019</small>

                </CardBody>
                <CardFooter>

                </CardFooter>
              </Card>
              </GridItem>
            </GridContainer>
            </div>
          </div>
        </div>
      </div>
    );}
  }

export default withStyles(workshopPageStyle)(DownloadsPage);
