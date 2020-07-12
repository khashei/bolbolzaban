import React from 'react';

export const UniVerseContext = React.createContext();
UniVerseContext.displayName = 'uniVerseContext';

const useUniVerseContext = () => {
  const context = React.useContext(UniVerseContext);
  if (context == null) {
    console.error('use uniVerseContext within provider block', context);
  }

  return context;
};

export default useUniVerseContext;
