/* eslint-disable import/no-unresolved */
import React from 'react';
import SupportUs from '@components/support-us';
import Introduction from './introduction';
import Links from './links';

const About = () => {
  return (
    <>
      <Introduction />
      <SupportUs />
      <Links />
    </>
    // <Feedback></Feedback>
  );
};

About.defaultProps = {};
About.propTypes = {};

export default About;
