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
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Badge from "components/Badge/Badge.js";


const dashboardRoutes = [];
class WorkshopPage extends React.Component {
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
              <h2 className={classes.title}>Workshops</h2>
              <h4>Welcome to reverse engineering workshops</h4>
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.section}>
            <GridContainer>
            <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card>
              <CardBody>
              <h5 className={classes.cardTitle}>Reverse Engineering 101</h5>
              <p>11 sections. This workshop provides the fundamentals of reversing
              engineering Windows malware using a hands-on experience with
              RE tools and techniques.</p>
              <Badge color="primary">x86</Badge>
              </CardBody>
              <CardFooter>
                <Button color="primary" compontent="a" href="workshops/re101.html">Start</Button>
                <small className={classes.cardDate}>Published May 14, 2019</small>
              </CardFooter>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card >
              <CardBody>
              <h4 className={classes.cardTitle}>Reverse Engineering 102</h4>
              <p>8 sections. This workshop build on RE101 and focuses on
              identifying simple encryption routines,
              evasion techniques, and packing.</p>
              <Badge color="primary">x86</Badge>
              <Badge color="warning">packing</Badge>
              <Badge color="info">encryption</Badge>
              <Badge color="danger">evasion</Badge>
              </CardBody>
              <CardFooter>
                <Button color="primary" compontent="a" href="">Start</Button>
                <small className={classes.cardDate}>ETA May 15, 2019</small>
              </CardFooter>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card>
              <CardBody>
                <h5 className={classes.cardTitle}>Setting Up Your Analysis Environment</h5>
              <p>In this workshop, you will learn the basics of setting up
               a simple malware analysis environment.</p>
              </CardBody>
              <CardFooter>
                <Button color="primary" compontent="a" href="">Start</Button>
                <small className={classes.cardDate}>ETA May 30, 2019</small>
              </CardFooter>
            </Card>
            </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );}
  }

export default withStyles(workshopPageStyle)(WorkshopPage);
