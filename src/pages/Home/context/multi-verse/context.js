import React from 'react';

export const MultiVerseContext = React.createContext();
MultiVerseContext.displayName = 'multiVerseContext';

const useMultiVerseContext = () => {
  const context = React.useContext(MultiVerseContext);
  if (context == null) {
    console.error('use multiVerseContext within provider block', context);
  }

  return context;
};

export default useMultiVerseContext;
