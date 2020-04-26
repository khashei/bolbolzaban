import React from 'react';
// import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  theme => ({
    loader: {
      margin: theme.spacing.unit,
    },
  })
);

const BeytLoader = () => {
  const classes = useStyles();
  return (
    <ContentLoader
      className={classes.loader}
      rtl={false}
      primaryColor="#635139"
      primaryOpacity={0.1}
      secondaryColor="#826a4a"
      secondaryOpacity={0.31}>
      <rect x="80" y="17" rx="2" ry="2" width="300" height="10" />
      <rect x="130" y="40" rx="2" ry="2" width="250" height="10" />
    </ContentLoader>
  );
}

export default BeytLoader;
