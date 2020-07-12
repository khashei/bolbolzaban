export const GENERATE_FULLFILLED = 'GENERATE_FULLFILLED';
export const UPDATE_INPUT = 'UPDATE_INPUT';

const textPieceReducer = (state, action) => {
  switch (action.type) {
    case GENERATE_FULLFILLED: {
      const { input, normalizedInput, style, output, error } = action.payload;
      const outputStartIndex = normalizedInput.length;
      return {
        ...state,
        input,
        normalizedInput,
        style,
        output: output.map((o) => `${o.slice(0, outputStartIndex)}<s>${o.slice(outputStartIndex)}`),
        error,
      };
    }

    case UPDATE_INPUT: {
      const { input } = action.payload;
      // eslint-disable-next-line no-console
      console.log({ action });
      return {
        ...state,
        input,
      };
    }

    default:
      throw new Error('undefined textPiece action');
  }
};

export default textPieceReducer;
