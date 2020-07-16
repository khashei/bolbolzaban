import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Box } from '@material-ui/core/';
import AnnouncementIcon from '@material-ui/icons/AnnouncementOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  box: {
    color: theme.palette.primary.main,
    padding: 5,
  },
  text: {
    marginRight: 15,
  },
}));

const HintBox = ({ text }) => {
  const classes = useStyles();
  return (
    <Box border={2} className={classes.box}>
      <Grid item className={classes.root}>
        <AnnouncementIcon color="primary" />
        <Typography variant="body2" className={classes.text}>
          {text}
        </Typography>
      </Grid>
    </Box>
  );
};

HintBox.propTypes = {
  text: PropTypes.string.isRequired,
};

HintBox.defaultProps = {};

export default HintBox;
