import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import IndeterminateLinearProgress from '@components/progress';

// @connect(state => ({
//   loadings: state.get('application').toJS().loadings,
// }))
class ApplicationProgressContainer extends React.Component {
  render() {
    // TODO
    // const { loadings } = this.props;
    const loadings = false;

    let result = null;
    if (loadings && Object.keys(loadings).length > 0) {
      result = <IndeterminateLinearProgress />;
    }
    return result;
  }
}

ApplicationProgressContainer.propTypes = {
  loadings: PropTypes.object,
};

ApplicationProgressContainer.defaultProps = {
  loadings: {},
};

export default ApplicationProgressContainer;
