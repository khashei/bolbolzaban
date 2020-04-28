import React from 'react';
import PropTypes from 'prop-types';
//import { nanoid } from 'nanoid';
import BeytCard from './beyt-card';
import BeytLoader from './beyt-loader';
import ErrorCard from './error-card';
import { makeStyles } from '@material-ui/core/styles';
// import { copyResultToClipboard } from '../../../../../actions/bolbolzaban/copy-result-to-clipboard';

const useStyles = makeStyles(
  theme => ({
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
  })
);

const ResultContainer = props => {
  console.log({props});

  const classes = useStyles();

  if (props.isLoading) {
    return (
      <div className={classes.root}>
        <BeytLoader />
      </div>
    );
  } else if (!props.isLoading) {
    if (props.error == null || props.error?.code === 200) {
      return (
        <div className={classes.root}>
          {props.outputs?.map((line, index) => (
            <BeytCard
              key={index}
              firstMesra={line.m1}
              secondMesra={line.m2}
              //onCopy={this.copyText}
            />
          ))}
        </div>
      );
    }
    return (
      <div className={classes.root}>
        <ErrorCard
          statusCode={props.error.code}
          error={props.error.message}
        />
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
      m2: PropTypes.string
    })
  ),
  error: PropTypes.exact({
    code: PropTypes.number,
    message: PropTypes.string
  }),
};

ResultContainer.defaultProps = {
  outputs: [],
  isLoading: false,
  error: null,
};

export default ResultContainer;
