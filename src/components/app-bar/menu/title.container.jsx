import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '1.5rem',
    display: 'block',
    textDecoration: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  titleText: {
    color: theme.palette.primary.contrastText,
  },
}));

const ApplicationTitleContainer = ({ text, link }) => {
  // state = {
  //   // auth: true,
  //   // anchorEl: null,
  // };

  const classes = useStyles();

  return (
    <Link to={link} className={classes.title}>
      <Typography variant="h6" className={classes.titleText} component="h2" noWrap>
        {text}
      </Typography>
    </Link>
  );
};

ApplicationTitleContainer.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

ApplicationTitleContainer.defaultProps = {};

export default ApplicationTitleContainer;
