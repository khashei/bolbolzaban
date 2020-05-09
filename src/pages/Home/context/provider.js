import React from 'react';
import PropTypes from 'prop-types';

import reducer from './uni-verse-reducer';
import initialState from './uni-verse-initial-state';
import { Context } from './uni-verse-context';

const Provider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { children } = props;
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Provider;
