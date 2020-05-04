import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, AppBar, Tabs, Tab, Typography } from '@material-ui/core';
import Introduction from './introduction';

import PropTypes from 'prop-types';
import Context from '@app-context';

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    width: '100%',
    backgroundColor: palette.common.lightBackground,
    marginTop: '-50px',
    paddingTop: '50px',
  },
  mainContent: {
    position: 'relative',
  },
}));
function About() {
  const handleChange = (event, value) => {
    setValue(value);
  };
  const classes = useStyles();
  return (
    <Introduction></Introduction>
    // <SupportUs></SupportUs>
    // <Feedback></Feedback>
    // <Links></Links>
  );
}

About.defaultProps = {};
About.propTypes = {};

export default About;
