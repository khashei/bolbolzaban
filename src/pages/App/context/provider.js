import React from 'react';
import reducers from './reducers';
import initialState from './initial-state';
import Context from './index';

const Provider = (props) => {
  const [globalState, dispatch] = React.useReducer(reducers, initialState);

  return (
    <Context.Provider value={{ globalState, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
