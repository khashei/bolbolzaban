import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Blank = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button>Blank It Is</Button>
    </div>
  );
}

Blank.defaultProps = {};
Blank.propTypes = {};

export default Blank;
