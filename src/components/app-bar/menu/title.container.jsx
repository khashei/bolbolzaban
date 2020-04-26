import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import theme from '@app/theme'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
// TODO
// @connect(state => ({
//   settings: state.get('application').toJS().settings,
// }))
const useStyles = () => makeStyles({
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

const ApplicationTitleContainer = props => {
  // state = {
  //   // auth: true,
  //   // anchorEl: null,
  // };

  // TODO
  // const { settings } = this.props;
  const settings = {
    navbarTitle: 'Fix the title',
    titleText: 'fix its text',
  };
  const classes = useStyles();
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
};

ApplicationTitleContainer.propTypes = {
  // items: PropTypes.array,
};

ApplicationTitleContainer.defaultProps = {
  // items: [],
};

export default ApplicationTitleContainer;
