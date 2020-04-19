import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core/';
import AnnouncementIcon from '@material-ui/icons/AnnouncementOutlined';
import withStyles from '@material-ui/core/styles/withStyles';

const HintBox = propos => {
  return ( 
    <Grid item className={props.classes.root}>
      <AnnouncementIcon color="primary" />
      <Typography className={classes.text}>{props.hint}</Typography>
    </Grid>
  );
}

HintBox.propTypes = {
  classes: PropTypes.object.isRequired,
  hint: PropTypes.string.isRequired,
};

HintBox.defaultProps = {
};

const styles = () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    marginLeft: 15,
  },
});

export default withStyles(styles, { withTheme: true })(HintBox);
