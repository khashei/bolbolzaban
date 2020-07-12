import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import reducer from './reducer';
import initialState from './initial-state';
import { UniVerseContext } from './context';

const UniVerseProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { children } = props;

  return (
    <UniVerseContext.Provider value={{ state, dispatch }}>{children}</UniVerseContext.Provider>
  );
};

UniVerseProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default UniVerseProvider;
