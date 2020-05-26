import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const TabContainer = (props) => {
  const { children } = props;
  return <Typography component="div">{children}</Typography>;
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabContainer;
