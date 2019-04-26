import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';


const styles = theme => ({
  root: {
    display: 'flex',
  },
  icon: {
    fontSize: 45,
    marginLeft: -20,
    marginRight: 10,
    marginTop: -5,
    marginBottom: -5,
  },
});

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 118">
            <path d="M59.7 118A59 59 0 0 1 0 57.8c0-19 8.4-31 16.6-40C25 8.6 39.4 0 58.7 0 78 0 85.6 6.4 89.8 8.7c-2.3 1.5-6.8 3.8-11.3 6.5-2-.9-10.7-3.6-14.6-3.9-4.6-.3-10.3.2-10.3.2a55 55 0 0 1 13 9.6c1.6 2.6 4 1.2 8.5-1.8C87.5 13.5 98 5.3 109 0c1.4-.5-.6 3.2-3 6.2-2.5 3-7.3 6.5-12.7 10.8C88 21.5 81.7 26 76 31.5c1 .8 2.8 3 3.7 3.8 3.1 3 11.1 10.4 12.2 13.3 2.2 3.7 5 7 6.2 10.9l.8 2.3c.3.5.4 4 .2 5.2 0 .6-.4 1.4-1 2.2l-1 1.8-.6 1A43.3 43.3 0 0 1 86 74.5c-.8.1-1.6 0-3.6-.8a15 15 0 0 0-1.7-.5c-.4 0-1.2-.5-1.8-1L74.5 68c-1.7-1.6-5.4-3-7.3-3.4-1.8-.5-3.5-.1-4.7-.1a10 10 0 0 1-3.7-.5c-1.2-.1-1.8-.1-1.9 1.3A28.7 28.7 0 0 0 54.3 85a25.7 25.7 0 0 0 9.3 14.4c4 3.6 10.9 4.3 10.9 4.3a49.1 49.1 0 0 0 26.3-22 48 48 0 0 0-10.4-59l8.5-7A58.9 58.9 0 0 1 59.7 118zm-29-34c0-1.1-.2-2.2-.4-3.3-.1-.4-.2-1.1-1.3-2.4-1-1.2-3.9-3.3-4.3-4.3-.2-.4-.3-.3-1.8 1.1a20 20 0 0 1-2 1.7c-.6.4 1.8 4.8 2.4 4.5 2-.8 5.7 4.9 6.7 6.1.7 1 .6-1.6.6-3.4zM34 73.8c0-2.7-.2-6.5-.4-7.1 0-1.7-1.7-3.4-2.6-4.3-1.5-2.1-2.2-3.5-5 .2a17.8 17.8 0 0 0-3.6 6.7c.7.8 2.2.9 2.7.3.9-1 2.4-1.7 3-.6.9 1.4 1.8 2.7 2.3 4.1 1.2 3.3 1.2 3.2 3.1 3.8.6.4.6-1 .5-3zm54.2-3.3c.5-.5.3-1.3-.6-2-.6 0-3.1-.1-3.5-.5.2-.5 1-1.2 1-2.2-1 1-2.7 1.2-3.6.4a9 9 0 0 0-2.4-1.8c-.8 0-2.7-2.5-2.7-3.4 0-.2-.2-.7-.5-1l-.6-.7c0-.1-.2-.2-.5-.1-.8.1-1.6-.6-1-.8a6 6 0 0 0 .3-3c-.6 0-1.5-.4-1.8-1L69 52.6a7 7 0 0 0-1.3-.5c-.2 0-.4-.2-.5-.4-.3-.5-1.4-1-2.2-1-.2 0-.5-.6-.7-.8-.1-.2-.4.2-.7.2-1.8.5-4.3-3.6-4-6.7l.2-2.5c0-.6.3-1.4.4-2 .2-.4.4-1.1.4-1.5 0-1.3-1.2-1.5-1.6-.3l-.6 1.9c-.2.7-.6 1.3-1 1.7a6 6 0 0 0-1 1.1c-.4.8-2 .6-2.3-.2-.9-2-.6-4.1.9-6 .7-.9.9-1.2 1-2.3.1-2-.8-2.9-1.6-1.5l-.7 1c-.2.3-.6 1.4-.8 2.4-.4 2-1.2 3.8-2 4.9-1.4 3-3 8.3-2.6 11.4 0 4.4 1.8 4.6 3 5.7a15 15 0 0 0 4.9 2.9c1.4.3 2.7.6 3.9.5 3.7-.5 10.3.8 12.9 3.2l1.7 1.3 2.2 1.4 1.4.8c.2 0 .8.3 1.2.7.8.7 2 1.1 3 1.1a8 8 0 0 1 2.7.9l.9.2c.3 0 .6.2.7.3.5.2 1 .3 1.4 0zm2.2-.9c.2 0 .3-.4.3-.7l.4-2c.5-2.2-.6-6.6-1.8-7.2-.3-.1-.4-.4-.4-.6 0-.2-.3-.5-.6-.7-.3-.2-.6-.6-.7-.9l-1-1c-1.1-.7-2.6-3.7-2.2-4.5.2-.6 1-.4 1.7.4.7 1 1 1 1.9.5.8-.6.7-1-.6-2.4L86 48.7c-.2-.4-.5-.8-.7-.8-.4-.1-1.4-1.6-2.2-3.3a36.2 36.2 0 0 0-9.2-8.9c-.6-.4-1.4-1-1.8-1.5a4 4 0 0 0-1-.8c-1-.4-.2-2.1.9-2.7l2.7-1.4c1.5-1 2.1-2.7 1.3-2.2-.6.4-4 .2-4.7-.1-.8-.4-1.6-.8-2.6-.3-.9.4-.9.4-2-.1l-1.7-.7a2 2 0 0 1-1-.4c-3.9-2-7.2-1.7-8.6.5l-.2.6c-.8.4.1 2.7 1.7 4.4.4.4 1 1.2 1.4 2 .4.7.6 1 .6.7a4 4 0 0 0-.5-2.4c-1.2-2.2-.1-3 1.7-1.3 2 1.9 3.4 9 2.5 12-.4 1-.4 1 .4 3 .5 1 1 2.2 1 2.6 0 1 .5 1.6 1.5 1.7 1 .2 2 .7 2 1l1.3 1 1.6 1c.2.2 1 .5 1.5.6 1.8.4 2.4.8 2.9 1.6.5 1 .8 1 1.5.5 1.3-1.2 1.6-1.1 3.7 1.2.6.8 4 2.7 4.6 2.7 1.2 0 3 3.7 2.1 4.6-.1.2 0 .4.2.7l.3.7c0 .4-1.2 2.2-1.5 2.6 1.5 0 2.3-1.5 2.8-1.9.8.7.4 1.5.2 1.9-.2.4-.2.5.5 1.3 1 1 .8 1 1.2.8zM67.8 42.4c-1-.1-1.4-.6-1.3-1.4V40c-.8-.8-.4-2.9.5-3.4 1.2-.6 3.3 0 3.9 1 .3.7 1.4 1.7 2 1.7.5 0 1 .7.9 1.1-.6 1.8-2.9 2.5-6 2zm-29 11.7c-1.3-1.8-1-3.4-1.9-4.5-3.4-1.2-5.8 1.4-10 7.3.2 1 1.2.4 2.2 1 .7-.7 1.6-1 2-1.2 1 .2.9 1.6 1.4 2.2.5 1.1 2.8 5.9 3.9 4 1-1.9 3.8-7 2.5-8.8zm-24-3.7c.4-.7 1.5-2.3 2.4-3.4l4-4.9A64.9 64.9 0 0 1 41 25.9a37.7 37.7 0 0 1 13.3-4.2c-.8-1.7-1-3-1-4.2l-.5-6a43.5 43.5 0 0 0-26.5 13A46 46 0 0 0 12 52.4s1.8-.3 2.8-2zm27.5-.9c.2-.9.6-1.8.7-2 .3-.3.3-.4 0-1.1-.3-.8-.6-2.6-.6-4.3 0-1.1-.3-1.5-1-1.5a2 2 0 0 1-.8-.3c-.8-.5-1.7 0-3.6 1.8l-2.9 2.8c-1.4 1.2-1.4 1.7-.2 1.7.5 0 1 0 1 .2h.5c1.8-.5 3.5.1 4 1.5l.5 1.3.5 1.4c.2 1 1.3 1.4 1.4.6l.5-2zm4.5-7.7l.6-1.4c0-.4.6-1.4 1.2-2.3 1-1.5 1.5-4 1-5.1-.2-.2-.2-.8 0-1.4.2-.8.1-1-.2-1.2l-.6-.8c-.1-.5-.1-.5-1 0l-1.3.3c-.8 0-6.2 4.5-7 5.8-.5 1.2-.3 2.2.5 2l1.3-.4c.4 0 1.1-.4 1.5-.8 1.4-1.4 2-.5 2 3.2 0 3 0 3 1 3 .5-.1.7-.3 1-.9zm30.8-16c.8-.2 1.2-.3 2.1-1.2 1-1 1.1-1.6.5-1.3l-3.1.2c-2.4 0-2.8-.5-3.6 0a9.6 9.6 0 0 0-2.7 1.6c0 .4 4.7 1 6.8.6zm3.6-3.3c1-.2 1.1-.3 1.6-.6.6-.3 1-1.3 1-1.3h-3.4c-1.3-.3-1.6-.3-2.3.2-.8.5-1.9 1.2-2.1 1.6h2c1.1 0 2.2.2 3.2 0zm3.8-3c1.6-.7 2.8-1.7 1.7-1.4a11 11 0 0 1-3.3-.3c-1.2 0-2.9 1-2.9 1.7 1 .4 3.5.6 4.5 0zm2.6-2.3c1-.2 2.2-1 1.9-1.3-1-.1-2-.5-2.8-.4-.8.2-1.9.8-2.4 1.5 1 .4 3 .2 3.3.2zm3.2-2.3L94 13c.5-.4 4-3 4.5-3.7 1.6-1.5-1.8.5-3.6 1.4-1.8 1-5.7 3-6.7 4 0 .3 1.7.5 2.5.2z"/>
          </svg>
    </SvgIcon>
  );
}

function LogoIcon(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <HomeIcon className={classes.icon}/>
    </div>
  );
}

export default withStyles(styles)(LogoIcon);
