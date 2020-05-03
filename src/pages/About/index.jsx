import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import PropTypes from 'prop-types';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.common.lightBackground,
    marginTop: '-50px',
    paddingTop: '50px',
  },
  mainContent: {
    position: 'relative',
  },
}));

function TabContainer(props) {
  return (
    <Typography component='div' style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function About() {
  // const { globalState, dispatch } = React.useContext(Context);
  // console.log('Global State', globalState);
  const [value, setValue] = useState(0);
  // const updatedSubscriptionHeight = (value) => {
  //   this.setState({ footerHeight: value });
  // }

  const handleChange = (event, value) => {
    setValue(value);
  };
  const classes = useStyles();
  return (
    <div className={classes.mainContent}>
      <p>درباره</p>
      {/* {(!this.props.hasSubscribed || this.props.justSubscribed) && (
        <SubscriptionContainer
          subscriptionHeight={this.updatedSubscriptionHeight}
        />
      )}
      {!this.props.hasIntroDismissed && <LandingIntro />} */}
    </div>
  );
}

About.defaultProps = {};
About.propTypes = {};

export default About;
