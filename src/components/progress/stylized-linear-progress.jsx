import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    height: 4,
  },
});

const StylizedLinearProgress = () => {
  const classes = useStyles();
  return <LinearProgress color="primary" className={classes.root} />;
};

export default StylizedLinearProgress;
