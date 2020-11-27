/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
// import HelpIcon from '@material-ui/icons/HelpOutline';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InstagramIcon from '@components/icons/instagram-icon';
import TelegramIcon from '@components/icons/telegram-icon';
// import FeedbackIcon from '@material-ui/icons/FeedbackOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';
import InfoIcon from '@material-ui/icons/Info';
import { Divider } from '@material-ui/core';

const ITEM_HEIGHT = 48;

const useStyles = makeStyles(() => ({
  root: {
    height: '2.5em',
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
  menuButton: {
    marginLeft: -12,
    marginleft: 20,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const ApplicationMenuContainer = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const goToInstgram = () => {
    window.open('https://www.instagram.com/bolbolzaban', '_blank');
    setAnchorEl(null);
  };

  const goToTelegram = () => {
    window.open('https://t.me/bolbol_zaban', '_blank');
    setAnchorEl(null);
  };

  const goToTwitter = () => {
    window.open('https://twitter.com/bolbol_zaban', '_blank');
    setAnchorEl(null);
  };

  // const goToFacebook = () => {
  //   window.open('https://www.facebook.com/bolbolzaban ', '_blank');
  //   setAnchorEl(null);
  // };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const classes = useStyles();
  return (
    <div>
      {/* <IconButton
          color="inherit"
          component={Link}
          to="/help"
          // href={`${settings.navbarLink}help`}
        >
          <HelpIcon />
        </IconButton> */}

      <IconButton
        aria-label="More"
        aria-owns={open ? 'long-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
        {/* <MenuItem key="help-option" onClick={handleClose} component={Link} to="/help">
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <Typography variant="inherit">راهنما</Typography>
        </MenuItem>
        <MenuItem key="feedback-option" onClick={handleClose} component={Link} to="/feedback">
          <ListItemIcon>
            <FeedbackIcon />
          </ListItemIcon>
          <Typography variant="inherit">ارسال نظر</Typography>
        </MenuItem> containerElement={<Link to="/about"  */}
        <MenuItem key="about" onClick={handleClose} component={Link} to="/about">
          <ListItemIcon>
            <InfoIcon className={classes.icon} />
          </ListItemIcon>
          <Typography variant="inherit">درباره بلبل‌زبان</Typography>
        </MenuItem>
        <Divider />
        <MenuItem key="telegram-option" onClick={goToTelegram}>
          <ListItemIcon>
            <TelegramIcon className={classes.icon} />
          </ListItemIcon>
          <Typography variant="inherit">کانال تلگرام</Typography>
        </MenuItem>
        <MenuItem key="twitter-option" onClick={goToTwitter}>
          <ListItemIcon>
            <TwitterIcon className={classes.icon} />
          </ListItemIcon>
          <Typography variant="inherit">حساب توییتر</Typography>
        </MenuItem>
        {/* <MenuItem key="instagram-option" onClick={goToFacebook}>
          <ListItemIcon>
            <FeedbackIcon className={classes.icon} />
          </ListItemIcon>
          <Typography variant="inherit">صفحه فیس‌بوک</Typography>
        </MenuItem> */}
        <MenuItem key="instagram-option" onClick={goToInstgram}>
          <ListItemIcon>
            <InstagramIcon className={classes.icon} />
          </ListItemIcon>
          <Typography variant="inherit">صفحه اینستاگرام</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

ApplicationMenuContainer.propTypes = {};

ApplicationMenuContainer.defaultProps = {};

export default ApplicationMenuContainer;
