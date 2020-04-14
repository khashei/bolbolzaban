import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// TODO
// @connect(state => ({
//   settings: state.get('application').toJS().settings,
// }))
class ApplicationTitleContainer extends React.Component {
  state = {
    // auth: true,
    // anchorEl: null,
  };

  render() {
    // TODO
    // const { settings } = this.props;
    const settings = {
      navbarTitle: 'Fix the title',
      titleText: 'fix its text',
    };
    const { classes } = this.props;
    return (
      <Link to={settings.navbarLink} className={classes.title}>
        <Typography
          variant='h6'
          className={classes.titleText}
          component='h2'
          noWrap
        >
          {settings.navbarTitle}
        </Typography>
      </Link>
    );
  }
}

ApplicationTitleContainer.propTypes = {
  // items: PropTypes.array,
};

ApplicationTitleContainer.defaultProps = {
  // items: [],
};

const style = (theme) => ({
  title: {
    fontSize: '1.5rem',
    display: 'block',
    textDecoration: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  titleText: {
    color: theme.palette.common.verylightColor,
  },
});

export default withStyles(style)(ApplicationTitleContainer);
