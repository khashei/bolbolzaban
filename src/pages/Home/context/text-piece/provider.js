import React from 'react';
import PropTypes from 'prop-types';

import reducer from './reducer';
import initialState from './initial-state';
import { TextPieceContext } from './context';

const TextPieceProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { children } = props;

  return (
    <TextPieceContext.Provider value={{ state, dispatch }}>{children}</TextPieceContext.Provider>
  );
};

TextPieceProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default TextPieceProvider;
