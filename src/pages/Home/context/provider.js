import React from 'react';
import reducer from './uni-verse-reducer';
import initialState from './uni-verse-initial-state';
import { Context } from './uni-verse-context';

const Provider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return <Context.Provider value={{ state, dispatch }}>{props.children}</Context.Provider>;
};

export default Provider;
