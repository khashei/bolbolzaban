/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import BeytLoader from '@components/progress/beyt-loader';
import ErrorCard from '@components/error-card';
import BeytCard from './beyt-card';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '60%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

const ResultContainer = ({ isLoading, outputs, error }) => {
  const classes = useStyles();

  if (isLoading) {
    return (
      <div className={classes.root}>
        <BeytLoader />
      </div>
    );
  }
  if (!isLoading) {
    if (error == null || error?.code === 200) {
      return (
        <div className={classes.root}>
          {outputs?.map((line, index) => (
            <BeytCard key={index} firstMesra={line.m1} secondMesra={line.m2} />
          ))}
        </div>
      );
    }
    return (
      <div className={classes.root}>
        <ErrorCard code={error.code} message={error.message} />
      </div>
    );
  }
  return null;
};

ResultContainer.propTypes = {
  isLoading: PropTypes.bool,
  outputs: PropTypes.arrayOf(
    PropTypes.exact({
      m1: PropTypes.string,
      m2: PropTypes.string,
    })
  ),
  error: PropTypes.exact({
    code: PropTypes.number,
    message: PropTypes.string,
  }),
};

ResultContainer.defaultProps = {
  outputs: [],
  isLoading: false,
  error: null,
};

export default ResultContainer;
