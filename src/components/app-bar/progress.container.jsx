import React from 'react';
import PropTypes from 'prop-types';
import IndeterminateLinearProgress from '@components/progress';

const ApplicationProgressContainer = () => {
  //todo4a
  const loadings = false;

  let result = null;
  if (loadings && Object.keys(loadings).length > 0) {
    result = <IndeterminateLinearProgress />;
  }
  return result;
}

ApplicationProgressContainer.propTypes = {
  loadings: PropTypes.object,
};

ApplicationProgressContainer.defaultProps = {
  loadings: {},
};

export default ApplicationProgressContainer;
