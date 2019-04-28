import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import resourcePageStyle from "../assets/jss/material-kit-react/views/resourcePage.js";
// core components
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Badge from "components/Badge/Badge.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from "@material-ui/core/Tooltip";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "@material-ui/core/Button";

const dashboardRoutes = [];
class ResourcePage extends React.Component {
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
              <h2 className={classes.title}>Resources</h2>
            </div>
            <div className={classes.section}>
            <h3>Reverse Engineering Tools</h3>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6} lg={4}>
                <List>
                  <Tooltip
                    id="x64dbg"
                    title="An open-source x64/x32 debugger for windows."
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" href="https://x64dbg.com" target="_blank">
                      <ListItemText primary="x64dbg" />
                      <Badge color="primary">debugger</Badge><Badge>windows</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="Immunity"
                    title="Free x32 debugger for windows."
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="https://www.immunityinc.com/products/debugger/">
                      <ListItemText primary="Immunity" />
                      <Badge color="primary">debugger</Badge><Badge>windows</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="Ollydbg"
                    title="Free x32 debugger for windows."
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="http://www.ollydbg.de/">
                      <ListItemText primary="Ollydbg" />
                      <Badge color="primary">debugger</Badge><Badge>windows</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="Windbg"
                    title="An local debugger for windows."
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/">
                      <ListItemText primary="Windbg" />
                      <Badge color="primary">debugger</Badge><Badge>windows</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="Dtrace"
                    title="A local tool for mac osx"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="http://dtrace.org/blogs/about/">
                      <ListItemText primary="Dtrace" />
                      <Badge color="primary">debugger</Badge><Badge>mac</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="Capstone"
                    title="Open-source C based disassembly/disassembler framework"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="https://github.com/aquynh/capstone">
                      <ListItemText primary="Capstone" />
                      <Badge color="rose">disassembler</Badge><Badge>all</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="IdaPro"
                    title="Expensive Windows, Linux or Mac OS X hosted multi-processor disassembler"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="https://www.hex-rays.com/products/ida/support/download.shtml">
                      <ListItemText primary="IdaPro & IdaFree" />
                      <Badge color="rose">disassembler</Badge><Badge>all</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="Radare2"
                    title="Free and portable reversing framework"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="https://rada.re/r/">
                      <ListItemText primary="Radare2" />
                      <Badge color="rose">disassembler</Badge><Badge>all</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="Ghidra"
                    title="A free software reverse engineering (SRE) suite of tools developed by NSA's Research Directorate"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="https://ghidra-sre.org/">
                      <ListItemText primary="Ghidra" />
                      <Badge color="rose">disassembler</Badge><Badge>all</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="Hopper"
                    title="Low cost macOS and Linux Disassembler"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="https://www.hopperapp.com/">
                      <ListItemText primary="Hopper" />
                      <Badge color="rose">disassembler</Badge><Badge>mac/linux</Badge>
                    </ListItem>
                  </Tooltip>
                </List>
              </GridItem>
              <GridItem xs={12} sm={12}  md={6} lg={4}>
                <List>
                  <Tooltip
                    id="BinaryNinja"
                    title="Low cost disassembler"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="https://binary.ninja/">
                      <ListItemText primary="Binary Ninja" />
                      <Badge color="rose">disassembler</Badge><Badge>all</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="JD-GUI"
                    title="Decompiler for the Java programming language"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="http://java-decompiler.github.io/">
                      <ListItemText primary="JD-GUI" />
                      <Badge color="success">decompiler</Badge><Badge>java</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="JEB"
                    title="Android decompiler"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="https://www.pnfsoftware.com/">
                      <ListItemText primary="JEB Decompiler" />
                      <Badge color="success">decompiler</Badge><Badge>android</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="dnspy"
                    title=".NET framework decompiler"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="https://github.com/0xd4d/dnSpy">
                      <ListItemText primary="DnSpy" />
                      <Badge color="success">decompiler</Badge><Badge>windows</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="Snowman"
                    title="standalone decompiler"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="https://derevenets.com/">
                      <ListItemText primary="Snowman"/>
                      <Badge color="success">decompiler</Badge><Badge>all</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="sothink"
                    title="Flash decompiler"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="http://www.sothink.com/product/flashdecompiler/">
                      <ListItemText primary="SoThink"/>
                      <Badge color="success">decompiler</Badge><Badge>windows/mac</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="hxdeditor"
                    title="Free Windows Hex editor"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="https://mh-nexus.de/en/hxd/">
                      <ListItemText primary="HxD Editor"/>
                      <Badge color="info">info</Badge><Badge>windows</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="blesseditor"
                    title="Free Linux Hex editor"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="https://packages.debian.org/sid/bless">
                      <ListItemText primary="Bless"/>
                      <Badge color="info">info</Badge><Badge>linux</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="yara"
                    title="Pattern matching swiss knife for malware researchers"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="https://virustotal.github.io/yara/">
                      <ListItemText primary="Yara"/>
                      <Badge color="warning">analysis</Badge><Badge>all</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="apimonitor"
                    title="Free tool to monitor and control API calls made by applications and services"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="http://www.rohitab.com/apimonitor">
                      <ListItemText primary="Apimonitor"/>
                      <Badge color="warning">analysis</Badge><Badge>windows</Badge>
                    </ListItem>
                  </Tooltip>
                </List>
              </GridItem>
              <GridItem xs={12} sm={12}  md={6} lg={4}>
                <List>
                  <Tooltip
                    id="pdfdumper"
                    title="Free tool for the analysis of malicious PDF documents"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="http://sandsprite.com/blogs/index.php?uid=7&pid=57">
                      <ListItemText primary="PDF Stream Dumper"/>
                      <Badge color="warning">analysis</Badge><Badge>windows</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="malzilla"
                    title="free tool to analyze malicious webpages and view their code"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" target="_blank" href="http://malzilla.sourceforge.net/">
                      <ListItemText primary="MalZilla"/>
                      <Badge color="warning">analysis</Badge><Badge>windows</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="vmware"
                    title="Running multiple operating systems on a single Linux or Windows PC"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" href="https://www.vmware.com/" target="_blank">
                      <ListItemText primary="VMWare" />
                      <Badge>all</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="vbox"
                    title="Free running multiple operating systems on a single Linux or Windows PC"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" href="https://www.virtualbox.org/" target="_blank">
                      <ListItemText primary="VirtualBox" />
                      <Badge>all</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="qemu"
                    title="Generic and open source machine emulator and virtualizer"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" href="https://www.qemu.org/" target="_blank">
                      <ListItemText primary="Qemu" />
                      <Badge>linux</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="Xen"
                    title="open source customizable hypervisor (HVM)"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" href="https://xenproject.org/users/virtualization/" target="_blank">
                      <ListItemText primary="Xen" />
                      <Badge>linux</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="INetSim"
                    title="software suite for simulating common internet services in a lab environment"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" href="https://www.inetsim.org/" target="_blank">
                      <ListItemText primary="INetSim" />
                      <Badge color="warning">analysis</Badge><Badge>linux</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="FakeNet"
                    title="dynamic network analysis tool for malware analysts"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" href="https://github.com/fireeye/flare-fakenet-ng" target="_blank">
                      <ListItemText primary="FakeNet" />
                      <Badge color="warning">analysis</Badge><Badge>windows</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="WireShark"
                    title="network protocol analyzer"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" href="https://www.wireshark.org/" target="_blank">
                      <ListItemText primary="WireShark" />
                      <Badge color="warning">analysis</Badge><Badge>all</Badge>
                    </ListItem>
                  </Tooltip>
                  <Tooltip
                    id="TcpDump"
                    title="command-line packet analyzer"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <ListItem button component="a" href="https://www.tcpdump.org/" target="_blank">
                      <ListItemText primary="TcpDump" />
                      <Badge color="warning">analysis</Badge><Badge>all</Badge>
                    </ListItem>
                  </Tooltip>
                </List>
              </GridItem>
            </GridContainer>
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.section}>
            <h3>Recommended Books</h3>
            <GridContainer>
            <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card >
              <CardBody>
              <h5>Practical Malware Analysis: The Hands‑On Guide to
               Dissecting Malicious Software</h5>
              <p><small>Andrew Honig and Michael Sikorski</small></p>
              <small>
              This book provides great examples to tackle the harder
              questions specifically for malware.
              </small>
              </CardBody>
              <CardFooter>
                <Button size="small" componten="a" href="https://repo.zenk-security.com/Virus-Infections-Detections-Preventions/Practical_Malware_Analysis.pdf">View</Button>
              </CardFooter>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card>
            <CardBody>
              <h5>Practical Reverse Engineering: x86, x64, ARM, Windows
              Kernel, Reversing Tools, and Obfuscation 1st Edition</h5>
              <p><small>Bruce Dang</small></p>
              <small>
              This is more of a reference book in my opinion.
              Has some great exercises to give you a greater understanding of assembly.
              </small>
              </CardBody>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card>
            <CardBody>
              <h5>Malware Analyst’s Cookbook and DVD</h5>
              <p><small>Blake Hartstein, Matthew Richard, Michael Hale Ligh, and Steven Adair</small></p>
              <small>
              This book is a great starter for understanding malware from the RE perspective and creating tools to help you RE.
              </small>
              </CardBody>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card>
            <CardBody>
              <h5>The Shellcoder's Handbook Discovering and Exploiting Security Holes</h5>
              <p><small>Jack Koziol, David Litchfield, Dave Aitel, Chris Anley, Sinan "noir" Eren</small></p>
              <small>
              This book is great for getting your feet wet into shellcoding.
              </small>
              </CardBody>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card>
            <CardBody>
              <h5>Rootkits: Subverting the Windows Kernel</h5>
              <p><small>Greg Hoglund</small></p>
              <small>
              This book will help those who want to get into writing windows detections.
              </small>
              </CardBody>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card>
            <CardBody>
              <h5>Art of Assembly Language</h5>
              <p><small>Randall Hyde</small></p>
              <small>
              This book is more of a reference for learning assembly language.
              </small>
              </CardBody>
              <CardFooter>
                <Button size="small" componten="a" href="http://www.staroceans.org/kernel-and-driver/The.Art.of.Assembly.Language.2nd.Edition.pdf">View</Button>
              </CardFooter>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card>
            <CardBody>
              <h5>Windows Internals</h5>
              <p><small>Mark E. Russinovich, David A. Solomon, Alex Ionescu </small></p>
              <small>
              This book is more of a reference for understanding how windows works.
              </small>
              </CardBody>
            </Card>
            </GridItem>
            </GridContainer>
          </div>
          <div className={classes.section}>
            <h3>Recommended Training and Sites</h3>
            <GridContainer>
            <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card>
              <CardBody>
              <h5>Opensecuritytraining.info</h5>
              <small>
              In the spirit of OpenCourseWare and the Khan Academy,
              OpenSecurityTraining.info is dedicated to sharing training material
               for computer security classes, on any topic, that are at least
                one day long.
              </small>
              </CardBody>
              <CardFooter>
                <Button size="small" componten="a" href="http://opensecuritytraining.info/">View</Button>
              </CardFooter>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card>
              <CardBody>
              <h5>Lenas Reversing for Newbies</h5>
              <small>
              Setup in 2003 Tuts 4 You is a non-commercial, independent
              community dedicated to the sharing of knowledge and information
              on reverse code engineering in many of the subject areas it spans,
              across the many different operating systems, platforms, hardware
              and devices that exist today.
              </small>
              </CardBody>
              <CardFooter>
                <Button size="small" componten="a" href="https://tuts4you.com/e107_plugins/download/download.php?action=list&id=17">View</Button>
              </CardFooter>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card>
              <CardBody>
              <h5>Dr. Fu's Malware Analysis Tutorials</h5>
              <small>
              Roadmap: You need to first follow Tutorials 1 to 4 to set up the
              lab configuration. Then each tutorial addresses an independent
              topic and can be completed separately (each one will have its
                own lab configuration instructions).
              </small>
              </CardBody>
              <CardFooter>
                <Button size="small" componten="a" href="http://fumalwareanalysis.blogspot.com/p/malware-analysis-tutorials-reverse.html">View</Button>
              </CardFooter>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card>
              <CardBody>
              <h5>Azeria Labs - ARM Assembly & Shellcode</h5>
              <small>
              Tutorial series on ARM assembly basics. This is the preparation
              for the followup tutorial series on ARM exploit development.
              Before we can dive into creating ARM shellcode and build ROP
              chains, we need to cover some ARM Assembly basics first.
              </small>
              </CardBody>
              <CardFooter>
                <Button size="small" componten="a" href="https://azeria-labs.com">View</Button>
              </CardFooter>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card>
              <CardBody>
              <h5>Hasherezade - How to start RE/malware analysis?</h5>
              <small>
              Recommentations by hasherezade in how to start RE, how to become a
              malware analyst, how she got started, what materials to recommend, etc.
              </small>
              </CardBody>
              <CardFooter>
                <Button size="small" componten="a" href="https://hshrzd.wordpress.com/how-to-start/">View</Button>
              </CardFooter>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card>
              <CardBody>
              <h5>Malwaretech - Malware Analysis</h5>
              <small>
              Malware breakdowns, environment setups, and challenges.
              </small>
              </CardBody>
              <CardFooter>
                <Button size="small" componten="a" href="https://www.malwaretech.com/category/malware-analysis">View</Button>
              </CardFooter>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card>
              <CardBody>
              <h5>Hexacorn - How to become the best Malware Analyst E-V-E-R</h5>
              <small>
              Hexcorn providing do's and don'ts of being a malware analyst. Recommentations
               are crowd sourced responses.
              </small>
              </CardBody>
              <CardFooter>
                <Button size="small" componten="a" href="http://www.hexacorn.com/blog/2018/04/14/how-to-become-the-best-malware-analyst-e-v-e-r/">View</Button>
              </CardFooter>
            </Card>
            </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );}
  }

export default withStyles(resourcePageStyle)(ResourcePage);
