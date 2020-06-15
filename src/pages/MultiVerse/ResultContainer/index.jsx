/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import BeytLoader from '@components/progress/beyt-loader';
import ErrorCard from '@components/error-card';
import TextCard from './text-card';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '60%',
    },
    // [theme.breakpoints.between('xs', 'sm')]: {
    //   width: '60%',
    // },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

const ResultContainer = ({ isLoading, output, error }) => {
  const classes = useStyles();

  if (isLoading) {
    return (
      <div className={classes.root}>
        <BeytLoader />
      </div>
    );
  }

  if (!isLoading && output.length > 0) {
    if (error == null || error?.code === 200) {
      return (
        <div className={classes.root}>
          <TextCard lines={output} />
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
  output: PropTypes.arrayOf(PropTypes.string),
  error: PropTypes.exact({
    code: PropTypes.number,
    message: PropTypes.string,
  }),
};

ResultContainer.defaultProps = {
  output: [],
  isLoading: false,
  error: null,
};

export default ResultContainer;
