import React from 'react';

export const TextPieceContext = React.createContext();
TextPieceContext.displayName = 'textPieceContext';

const textPieceContext = () => {
  const context = React.useContext(TextPieceContext);
  if (context == null) {
    console.error('use textPieceContext within provider block', context);
  }

  return context;
};

export default textPieceContext;
