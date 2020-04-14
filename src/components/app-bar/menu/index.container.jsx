import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from './item';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import FeedbackIcon from '@material-ui/icons/FeedbackOutlined';
import HelpIcon from '@material-ui/icons/HelpOutline';
// import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SvgIcon from '@material-ui/core/SvgIcon';

const ITEM_HEIGHT = 48;

function InstagramIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
    </SvgIcon>
  );
}

function TelegramIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d='M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444zm-.118 1.874c.027.025.025.025.002.027-.007-.002.08.118-.09.755l-.007.024-.005.022c-.432 1.997-2.936 13.9-3.27 15.356-.046.196-.065.182-.054.17-.1-.015-.285-.094-.3-.1l-7.48-5.525c2.562-2.467 5.182-4.7 7.827-7.08.468-.235.39-.96-.17-.972-.594.14-1.095.567-1.64.84-3.132 1.858-6.332 3.492-9.43 5.406-1.59-.553-3.177-1.012-4.643-1.467 1.272-.51 2.283-.886 3.278-1.27 1.738-.67 3.996-1.54 6.256-2.415 4.522-1.748 9.07-3.51 9.465-3.662l.032-.013.03-.013c.11-.05.173-.055.202-.057 0 0-.01-.033-.002-.026zM10.02 16.016l1.234.912c-.532.52-1.035 1.01-1.398 1.36z' />
    </SvgIcon>
  );
}

// @connect(state => ({
//   settings: state.get('application').toJS().settings,
// }))
class ApplicationMenuContainer extends React.Component {
  state = {
    anchorEl: null,
  };

  goToInstgram = () => {
    window.open('https://www.instagram.com/bolbolzaban', '_blank');
    this.setState({ anchorEl: null });
  };

  goToTelegram = () => {
    window.open('https://t.me/bolbol_zaban', '_blank');
    this.setState({ anchorEl: null });
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    const open = Boolean(anchorEl);

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
          aria-label='More'
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup='true'
          onClick={this.handleClick}
          color='inherit'
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id='long-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          <MenuItem
            key='help-option'
            onClick={this.handleClose}
            component={Link}
            to='/help'
          >
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <Typography variant='inherit'>راهنما</Typography>
          </MenuItem>
          <MenuItem
            key='feedback-option'
            onClick={this.handleClose}
            component={Link}
            to='/feedback'
          >
            <ListItemIcon>
              <FeedbackIcon />
            </ListItemIcon>
            <Typography variant='inherit'>ارسال نظر</Typography>
          </MenuItem>
          <MenuItem key='telegram-option' onClick={this.goToTelegram}>
            <ListItemIcon>
              <TelegramIcon className={classes.icon} />
            </ListItemIcon>
            <Typography variant='inherit'>کانال تلگرام</Typography>
          </MenuItem>
          <MenuItem key='instagram-option' onClick={this.goToInstgram}>
            <ListItemIcon>
              <InstagramIcon className={classes.icon} />
            </ListItemIcon>
            <Typography variant='inherit'>صفحه اینستاگرام</Typography>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

ApplicationMenuContainer.propTypes = {
  // items: PropTypes.array,
};

ApplicationMenuContainer.defaultProps = {
  // items: [],
};

const style = (theme) => ({
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
});

export default withStyles(style)(ApplicationMenuContainer);
