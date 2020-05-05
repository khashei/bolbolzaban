import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Introduction from './introduction';
import SupportUs from './support-us';
import Links from './links';


const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    width: '100%',
    //backgroundColor: theme.palette.common.lightBackground,
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
    <Fragment>
      <Introduction></Introduction>
      <SupportUs></SupportUs>
      <Links></Links>
    </Fragment>
    // <Feedback></Feedback>
    );
}

About.defaultProps = {};
About.propTypes = {};

export default About;
