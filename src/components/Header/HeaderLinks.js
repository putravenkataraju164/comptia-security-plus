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

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.js";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List>
      <ListItem button component="a" href="/landing-page"  className={classes.listItem}>
        <ListItemIcon>
            <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>

      <ListItem button component="a" href="/landing-page"  className={classes.listItem}>

        <ListItemText inset primary="Workshops" />
      </ListItem>
      <ListItem button component="a" href="/landing-page"  className={classes.listItem}>

        <ListItemText inset primary="Resources" />
      </ListItem>
      <ListItem button component="a" href="/landing-page"  className={classes.listItem}>

        <ListItemText inset primary="About" />
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
