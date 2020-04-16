import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core/';
import AnnouncementIcon from '@material-ui/icons/AnnouncementOutlined';
import withStyles from '@material-ui/core/styles/withStyles';

class InputHintBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid item className={classes.root}>
        <AnnouncementIcon color="primary" />
        <Typography className={classes.text}>{this.props.hint}</Typography>
      </Grid>
    );
  }
}

InputHintBox.propTypes = {
  classes: PropTypes.object.isRequired,
  hint: PropTypes.string.isRequired,
};

InputHintBox.defaultProps = {
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

export default withStyles(styles, { withTheme: true })(InputHintBox);
