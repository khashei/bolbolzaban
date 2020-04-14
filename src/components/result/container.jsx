import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import withStyles from '@material-ui/core/styles/withStyles';
import BeytCard from './beyt-card';
import BeytLoader from './beyt-loader';
import ErrorCard from './error-card';
// import { copyResultToClipboard } from '../../../../../actions/bolbolzaban/copy-result-to-clipboard';

// @connect(state => ({
//   bolbolzaban: state.get('deepsher'),
// }), {
//   copyResultToClipboard,
// })
class ResultContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  copyText = (text) => {
    // TODO
    // this.props.copyResultToClipboard(text);
  };

  render() {
    // TODO bolbolzaban
    const bolbolzaban = [];

    const { classes } = this.props;
    const currentResult = bolbolzaban;
    if (currentResult.isLoading === true) {
      return (
        <div className={classes.root}>
          <BeytLoader />
        </div>
      );
    } else if (currentResult?.isLoading === false) {
      if (currentResult?.statusCode === 200) {
        return (
          <div className={classes.root}>
            {currentResult?.outputs.map((line) => (
              <BeytCard
                key={`b${nanoid(8)}`}
                firstline={line.m1}
                secondline={line.m2}
                onCopy={this.copyText}
              />
            ))}
          </div>
        );
      }
      return (
        <div className={classes.root}>
          <ErrorCard
            statusCode={currentResult.statusCode}
            error={currentResult.error}
          />
        </div>
      );
    }
    return null;
  }
}

const styles = (theme) => ({
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
});

ResultContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  bolbolzaban: PropTypes.object,
  copyResultToClipboard: PropTypes.func,
};

ResultContainer.defaultProps = {
  bolbolzaban: {},
  copyResultToClipboard: null,
};

export default withStyles(styles, { withTheme: true })(ResultContainer);
