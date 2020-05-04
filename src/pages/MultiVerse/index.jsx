import React, { useEffect, useState } from 'react';
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

function MultiVerse() {
  const [value, setValue] = useState(0);
  const handleChange = (event, value) => {
    setValue(value);
  };
  const classes = useStyles();
  return (
    <div className={classes.mainContent}>
      <p>سرایش شعر</p>
    </div>
  );
}

MultiVerse.defaultProps = {};
MultiVerse.propTypes = {};

export default MultiVerse;
