import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core/';
import AnnouncementIcon from '@material-ui/icons/AnnouncementOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    marginRight: 15,
  },
}));

const HintBox = ({ text }) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.root}>
      <AnnouncementIcon color="primary" />
      <Typography variant="body2" className={classes.text}>
        {text}
      </Typography>
    </Grid>
  );
};

HintBox.propTypes = {
  text: PropTypes.string.isRequired,
};

HintBox.defaultProps = {};

export default HintBox;
