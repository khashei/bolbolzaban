import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
// import SvgIconElement from '../icons/index';
// import LogoImage from '../../../resources/images/logo.svg';

const styles = {
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
};

const ProgressStyles = {
  root: {
    height: 4,
  },
};

const StylizedLinearProgress = withStyles(ProgressStyles)((props) => {
  const { classes } = props;
  return (<LinearProgress color="primary" className={classes.root} />);
});

const IndeterminateLinearProgress = (props) => {
  const { classes } = props;
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

IndeterminateLinearProgress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndeterminateLinearProgress);
