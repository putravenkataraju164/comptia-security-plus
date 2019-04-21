import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import SvgIcons from './logo';
import 'typeface-roboto';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      //main: purple[500],
      main: '#2E3F47',
      // dark: will be calculated from palette.primary.main,
      contrastText: '#EDF2F4',
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: purple[500],
      //main: '#2E3F47',
      // dark: will be calculated from palette.primary.main,
      //contrastText: '#EDF2F4',
    },
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
});


class MenuListComposition extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
        <div>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true" color="inherit"
            onClick={this.handleToggle}
          >
            <MenuIcon />
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={this.handleClose}>About</MenuItem>
                      <MenuItem onClick={this.handleClose}>Workshops</MenuItem>
                      <MenuItem onClick={this.handleClose}>Resources</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <MuiThemeProvider theme={theme}>
    <AppBar
        position="absolute"
        className={classNames(classes.appBar)}
      >
        <Toolbar>
          <MenuListComposition color="inherit"/>
          <Button color="inherit" href="https://malwareunicorn.org" className={classes.grow}>
              <SvgIcons />
              <Typography variant="h6" weight="bold" color="inherit" className={classes.grow} >
                MALWARE UNICORN
              </Typography>
          </Button>
          <Button color="inherit" href="https://github.com/malware-unicorn">Github</Button>
        </Toolbar>
      </AppBar>
      </MuiThemeProvider>
    </div>
  );
}


ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
