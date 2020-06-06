export const GENERATE_TEXT_FULLFILLED = 'GENERATE_TEXT_FULLFILLED';

const multiVerseReducer = (state, action) => {
  switch (action.type) {
    case GENERATE_TEXT_FULLFILLED: {
      const { input, style, output, error } = action.payload;
      return {
        ...state,
        input,
        style,
        output,
        error,
      };
    }
    default:
      throw new Error('undefined multiVerse action');
  }
};

export default multiVerseReducer;
