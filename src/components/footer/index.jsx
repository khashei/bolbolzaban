import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import CheckCircle from '@material-ui/icons/CheckCircle';
import { Divider, Typography, Grid, IconButton } from '@material-ui/core';
import Feedback from '@material-ui/icons/Feedback';
import { Link } from 'react-router-dom';
import Send from '@material-ui/icons/Send';

import { subscribe } from '../../../../../actions/bolbolzaban/subscribe';


@connect(state => ({
  hasSubscribed: state.getIn(['subscription', 'hasSubscribed']),
  isLoading: state.getIn(['subscription', 'isLoading']),
  hasSubscriptionFailed: state.getIn(['subscription', 'hasSubscriptionFailed']),
}), {
  subscribe,
})

class SubscriptionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.mainComp = React.createRef();
  }

  componentDidMount() {
    this.props.subscriptionHeight(this.mainComp.current.clientHeight);
  }

  render() {
    const { classes } = this.props;
    return (
      <span
        className={classes.fixedSection}
        ref={this.mainComp}
      >

        <Divider className={classes.devider} />
        <div className={classes.root}>
          <Grid container className={classes.textInputRow}>
            <Feedback color="primary" />
            <Typography className={classes.text}>
بگو آنچه دوست داری ز بلبل / از بدی‌ها هم بگو مارشال دو گل
            </Typography>
            <IconButton
              className={classes.button}
              aria-label="Contact"
              component={Link}
              key="feedback"
              to="/feedback"
            >
              <Send />
            </IconButton>

          </Grid>
        </div>
      </span>
    );
  }
}

const styles = theme => ({
  fixedSection: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.common.darkBackground,
    [theme.breakpoints.up('md')]: {
      padding: '15px 25% 15px 31%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      padding: '15px 25% 15px 25%',
    },
    // [theme.breakpoints.between('xs', 'sm')]: {
    //   width: '60%',
    // },
    [theme.breakpoints.down('sm')]: {
      padding: 20,
    },
  },
  textInputRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginLeft: 15,
  },
  devider: {
    borderTop: `2px dashed ${theme.palette.primary.main}`,
    marginTop: '3em',
  },
});


SubscriptionContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  hasSubscribed: PropTypes.bool,
  isLoading: PropTypes.bool,
  hasSubscriptionFailed: PropTypes.bool,
  subscribe: PropTypes.func,
  subscriptionHeight: PropTypes.func,
};

SubscriptionContainer.defaultProps = {
  hasSubscribed: false,
  isLoading: false,
  hasSubscriptionFailed: false,
  subscribe: null,
  subscriptionHeight: null,
};

export default withStyles(styles, { withTheme: true })(SubscriptionContainer);
