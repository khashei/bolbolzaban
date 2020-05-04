import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import { Divider } from '@material-ui/core';
import { subscribe } from '../../../../../actions/bolbolzaban/subscribe';
import SubscriptionInputForm from './input-form';
import SubscriptionMessageBar from './message-bar';

@connect(
  (state) => ({
    hasSubscribed: state.getIn(['subscription', 'hasSubscribed']),
    isLoading: state.getIn(['subscription', 'isLoading']),
    hasSubscriptionFailed: state.getIn([
      'subscription',
      'hasSubscriptionFailed',
    ]),
  }),
  {
    subscribe,
  }
)
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
      <span className={classes.fixedSection} ref={this.mainComp}>
        {this.props.hasSubscribed ? (
          <SubscriptionMessageBar />
        ) : (
          <SubscriptionInputForm
            onSubmit={this.props.subscribe}
            hasSubscriptionFailed={this.props.hasSubscriptionFailed}
            isLoading={this.props.isLoading}
          />
        )}
      </span>
    );
  }
}

const styles = (theme) => ({
  fixedSection: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  root: {},
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
