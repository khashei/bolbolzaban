import React from 'react';
// import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loader: {
    margin: theme.spacing(2),
  },
}));

const BeytLoader = () => {
  const classes = useStyles();
  return (
    <ContentLoader
      className={classes.loader}
      rtl
      backgroundColor="#635139"
      backgroundOpacity={0.1}
      foregroundColor="#826a4a"
      foregroundOpacity={0.31}
    >
      <rect x="10" y="1rem" rx="2" ry="2" width="250" height="1rem" />
      <rect x="10" y="3rem" rx="2" ry="2" width="220" height="1rem" />
    </ContentLoader>
  );
};

export default BeytLoader;
