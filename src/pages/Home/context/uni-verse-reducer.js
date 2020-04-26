export const GENERATE_VERSE_FULLFILLED = "GENERATE_VERSE_FULLFILLED";

const uniVerseReducer = (state, action) => {
  switch (action.type) {
    case GENERATE_VERSE_FULLFILLED: 
      const { firstMesra, secondMesra, style, outputs } = action.payload;
      return {
        ...state,
        firstMesra,
        secondMesra,
        style,
        outputs,
      };
    default:
      throw new Error("undefined uniVerse action");
  }
};

export default uniVerseReducer;