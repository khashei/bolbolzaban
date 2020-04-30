import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import StylizedLinearProgress from './stylized-linear-progress';
// import SvgIconElement from '../icons/index';
// import LogoImage from '../../../resources/images/logo.svg';

const useStyles = makeStyles({
  image: {
    zIndex: 99999,
    position: 'fixed',
  },
  root: {
    // flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  cover: {
    position: 'fixed',
    zIndex: 1,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    // backgroundColor: '#fff',
    background: 'transparent',
    opacity: 0.7,
    pointerEvents: 'none',
  },
});

const IndeterminateLinearProgress = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.cover} />
      <div className={classes.image}>
        <CircularProgress size={60} thickness={4} color="primary" id="application-is-loading" />
      </div>
      <StylizedLinearProgress />
    </div>
  );
};

export default IndeterminateLinearProgress;
