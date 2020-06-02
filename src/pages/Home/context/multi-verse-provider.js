import React from 'react';
import PropTypes from 'prop-types';

import reducer from './multi-verse-reducer';
import initialState from './multi-verse-initial-state';
import { MultiVerseContext } from './multi-verse-context';

const MultiVerseProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { children } = props;

  return (
    <MultiVerseContext.Provider value={{ state, dispatch }}>{children}</MultiVerseContext.Provider>
  );
};

MultiVerseProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default MultiVerseProvider;
