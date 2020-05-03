import React from 'react';
// import { AppBar, Toolbar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { fade } from '@material-ui/core/styles/colorManipulator';
import ApplicationProgressContainer from './progress.container';
import ApplicationMenuContainer from './menu/index.container';
import ApplicationTitleContainer from './menu/title.container';
import ApplicationDrawerContainer from './drawer/index.container';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    // transition: `height ${theme.transitions.duration.short}ms`,
  },
  // grow: {
  //   flexGrow: 1,
  // },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  menuContainer: {
    // textAlign: 'right',
    // paddingTop: '2px !important',
    // '& span': {
    //   textTransform: 'none !important',
    // },
  },
}));

const ApplicationAppBar = () => {
  const classes = useStyles();
  return (
    <Fade in>
      <AppBar position='static'>
        <ApplicationProgressContainer />
        <Toolbar className={classes.root}>
          <ApplicationDrawerContainer />
          <ApplicationTitleContainer text="بلبل‌زبان" link="/" />
          {/* <div className={classes.grow} /> */}
          <ApplicationMenuContainer />
        </Toolbar>
      </AppBar>
    </Fade>
  )
};


export default ApplicationAppBar;
