import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';


export const TabContainer = props => {
  return (<Typography component='div' style={{ padding: 8 * 3 }}>
    {props.children}
  </Typography>);
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
