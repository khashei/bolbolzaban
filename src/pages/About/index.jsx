import React from 'react';
import Introduction from './introduction';
import SupportUs from './support-us';
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
