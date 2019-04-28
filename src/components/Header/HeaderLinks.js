/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Home, Menu, CloudDownload } from "@material-ui/icons";

import HomeIcon from '@material-ui/icons/Home';
import ExtensionIcon from '@material-ui/icons/Extension';
import BuildIcon from '@material-ui/icons/Build';
import MoodIcon from '@material-ui/icons/Mood';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.js";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem button component={Link} to="/" className={classes.listItem}>
        <ListItemIcon >
            <HomeIcon/>
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>

      <ListItem button component={Link} to="/workshops"  className={classes.listItem}>
      <ListItemIcon >
          <ExtensionIcon/>
      </ListItemIcon>
        <ListItemText primary="Workshops" />
      </ListItem>
      <ListItem button component={Link} to="/resources"  className={classes.listItem}>
      <ListItemIcon >
          <BuildIcon/>
      </ListItemIcon>
        <ListItemText  primary="Resources" />
      </ListItem>
      <ListItem button component={Link} to="/downloads"  className={classes.listItem}>
      <ListItemIcon >
          <CloudDownloadIcon/>
      </ListItemIcon>
        <ListItemText  primary="Downloads" />
      </ListItem>
      <ListItem button component={Link} to="/about"  className={classes.listItem}>
      <ListItemIcon >
          <MoodIcon/>
      </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button component="a" href="https://github.com/malware-unicorn" className={classes.listItem}>
          <i className={classes.socialIcons + " fab fa-github"} />
        <ListItemText primary="Github" />
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
