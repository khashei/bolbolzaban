import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import MenuItem from './item';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import HomeIcon from '@material-ui/icons/Home';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
// import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(() => ({
  menuButton: {
    marginLeft: -12,
    marginleft: 20,
  },
  list: {
    width: 250,
  },
  title: {
    display: 'block',
  },
  titleText: {
    fontSize: 18,
    display: 'inline-block',
  },
  fullList: {
    width: 'auto',
  },
}));

const ApplicationMenuContainer = () => {
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (open) => () => {
    window.location = 'http://nosokhan.com/';
    // setDrawerState(open);
    // setState({
    //   [side]: open,
    // });
  };

  const classes = useStyles();

  const sideList = (
    <div className={classes.list}>

      <IconButton
        onClick={toggleDrawer(true)}
        className={classes.title}
        color="inherit"
        aria-label="Open drawer"
      >
        <ArrowForwardIcon />
      </IconButton>

      <Link to="/" className={classes.title}>
        <HomeIcon />
        <Typography variant="h6" className={classes.titleText} component="h2" noWrap>
          صفحه اصلی
          </Typography>
      </Link>
      <Link to="/library" className={classes.title}>
        <LocalLibraryIcon />
        <Typography variant="h6" className={classes.titleText} component="h2" noWrap>
          کتابخانه اشعار
          </Typography>
      </Link>
      <Link to="/bolbolzaban" className={classes.title}>
        <LocalLibraryIcon />
        <Typography variant="h6" className={classes.titleText} component="h2" noWrap>
          بلبل‌زبان
          </Typography>
      </Link>
      {/* <List>my item</List> */}
      <Divider />
      <List>other links are not in our project! if we go there we cant come back </List>
    </div>
  );

  return (
    <div>
      {/* <IconButton
          onClick={toggleDrawer(true)}
          className={classes.menuButton}
          color="inherit"
          aria-label="Open drawer"
        >
          <MenuIcon />
        </IconButton> */}

      <IconButton
        onClick={toggleDrawer(true)}
        className={classes.title}
        color="inherit"
        aria-label="Open drawer"
      >
        <ArrowForwardIcon />
      </IconButton>

      <SwipeableDrawer
        anchor="left"
        open={drawerState}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {sideList}
        </div>
      </SwipeableDrawer>
    </div>
  );
}

ApplicationMenuContainer.propTypes = {
  items: PropTypes.array,
};

ApplicationMenuContainer.defaultProps = {
  items: [],
};

export default ApplicationMenuContainer;
