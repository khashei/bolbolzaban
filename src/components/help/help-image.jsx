import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const BolbolzabanHelpImage = (props) => {
  const { classes, source } = props;

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <img src={source} alt="بلبل‌زبان" className={classes.image} />
    </Grid>
  );
};


BolbolzabanHelpImage.propTypes = {
  classes: PropTypes.object.isRequired,
  source: PropTypes.string.isRequired,
};

const styles = () => ({
  image: {
    opacity: 0.6,
    maxWidth: 'calc(90vw - 80px)',
    height: 'auto',
    marginBottom: '40px',
  },
});

export default withStyles(styles, { withTheme: true })(BolbolzabanHelpImage);
