import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import profilePageStyle from "../assets/jss/material-kit-react/views/aboutPage.js";
// core components
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import profile from "assets/img/profile-pic.jpg";


const dashboardRoutes = [];
class AboutPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
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
        <Parallax small filter image={require("assets/img/purple-blur-bg.jpg")}/>
        <div className={classNames(classes.main, classes.mainRaised)}>
            <div>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={6}>
                    <div className={classes.profile}>
                      <div>
                        <img src={profile} alt="..." className={imageClasses} />
                      </div>
                      <div className={classes.name}>
                        <h3 className={classes.title}>Amanda Rousseau</h3>
                        <h6>Offensive Security Engineer</h6>
                        <h6>Reverse Engineer</h6>
                        <Button justIcon link className={classes.margin5} href="https://twitter.com/malwareunicorn">
                          <i className={"fab fa-twitter"} />
                        </Button>
                        <Button justIcon link className={classes.margin5} href="https://github.com/malware-unicorn">
                          <i className={"fab fa-github"} />
                        </Button>
                        <Button justIcon link className={classes.margin5} href="https://www.linkedin.com/in/amanda-rousseau-78931847">
                          <i className={"fab fa-linkedin"} />
                        </Button>
                      </div>
                    </div>
                  </GridItem>
                </GridContainer>
                <div className={classes.description}>
                  <p>
                    Amanda absolutely loves malware. She works as an
                    Offensive Security Engineer on the Red Team at Facebook.
                    Previously Malware Researcher at Endgame, FireEye, and the
                    U.S. Department of Defense Cyber Crime Center. Received a MS
                    in Information Systems Engineering from
                    Johns Hopkins University, Maryland. Research interests include
                    malware evasion techniques, rootkits, dynamic behavior classification,
                     and developing runtime kernel detections.{" "}
                  </p>
                </div>
              </div>
            </div>
        </div>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
            <h6 className={classes.profile}>White Papers</h6>
            <p>
            <a href="https://arxiv.org/pdf/1709.07508.pdf">Hijacking .NET to Defend PowerShell</a> |
            arxiv.org
            </p>
            <p>
            Malware Dynamic Behavior Classification: SVM-HMM applied
            to Malware API Sequencing
            | Johns Hopkins University
            </p>
            <p>
            Dll Side-Loading: A Thorn in the Side of the Anti-Virus Industry |
            FireEye
            </p>
            </GridItem>
            </GridContainer>
            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
            <h6 className={classes.profile}>Conferences</h6>
            <p>
            Reverse Engineering Fancy Malware, The Good, The Bad, the Ugly
            | <b>Red Team Summit 2019</b>
            </p>
            <p>
            Finding Xori: Malware Analysis Triage with Automated Disassembly
            | <b>Blackhat 2018, Defcon 26</b>
            </p>
            <p>
            What Can Reverse Engineering Do For You?
            | <b>Shellcon 2017</b>
            </p>
            <p>
            Reverse Engineering Malware 101
            | <b>WiCys Conference 2017, DEF CON (Packet Hacking Village) 2017, 44Con 2017</b>
            </p>
            <p>
            .Net Hijacking to Defend Powershell slides
            | <b>BSides 2017, CanSecWest 2017</b>
            </p>
            <p>
            Instegogram: Leveraging Instagram for C2 via Image Steganography
            | <b>DefCon (Crypto Village) 2016</b>
            </p>
            <p>
            OSX Malware: Plists, Shell Scripts, and Objective-C, Oh-My!
            | <b>Mircon 2014</b>
            </p>
            <p>
            DLL Side-Loading: A Thorn in the Side of the Anti-Virus (AV) Industry
            | <b>RSA Conference 2014</b>
            </p>
            <p>
            Vehicle Embedded System Imaging & Extraction, Examination and Exploitation
            | <b>DoD Cyber Crime Conference 2012</b>
            </p>
            </GridItem>
            </GridContainer>

          </div>
        </div>
      </div>
    );}
  }

export default withStyles(profilePageStyle)(AboutPage);
