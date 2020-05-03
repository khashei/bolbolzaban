import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';


const TabContainer = props => {
  return (<Typography component="div">
    {props.children}
  </Typography>);
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabContainer