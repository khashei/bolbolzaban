import React from 'react';

export const Context = React.createContext();

const useUniVerseContext = () => {
  const context = React.useContext(Context);
  if (context == null) {
    console.error("use uniVerseContext within provider block", context);
  } 

  return context;
}

export default useUniVerseContext;
