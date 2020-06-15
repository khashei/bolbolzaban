export const GENERATE_TEXT_FULLFILLED = 'GENERATE_TEXT_FULLFILLED';

const multiVerseReducer = (state, action) => {
  switch (action.type) {
    case GENERATE_TEXT_FULLFILLED: {
      const { input, style, output, error } = action.payload;
      const outputStartIndex = input.length;

      return {
        ...state,
        input,
        style,
        output: output.map((o) => `${o.slice(0, outputStartIndex)}<s>${o.slice(outputStartIndex)}`),
        error,
      };
    }
    default:
      throw new Error('undefined multiVerse action');
  }
};

export default multiVerseReducer;
