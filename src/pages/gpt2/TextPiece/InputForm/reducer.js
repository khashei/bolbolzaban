export const UPDATE_INPUT = 'UPDATE_INPUT';
export const GENERATE = 'GENERATE';
export const GENERATE_FROM_SAMPLES = 'GENERATE_FROM_SAMPLES';
export const GENERATE_MORE = 'GENERATE_MORE';

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_INPUT: {
      const { input } = action.payload;
      return {
        ...state,
        input,
      };
    }

    case GENERATE: {
      const input = state.input.trim();
      if (!input) {
        return {
          ...state,
          inlineHelpVisible: true,
          hintUserToEditAndContinue: true,
        };
      }

      return {
        ...state,
        inlineHelpVisible: false,
        input,
        hint: '',
      };
    }

    case GENERATE_FROM_SAMPLES: {
      return {
        ...state,
        inlineHelpVisible: false,
        hint: 'دکمه بنویس را دوباره بزنید، تا بلبل زبان یک متن جدید بنویسد.',
        isUserDefined: false,
        hintUserToEditAndContinue: true,
      };
    }

    case GENERATE_MORE: {
      let hint = '';
      let { hintUserToEditAndContinue } = state;
      if (hintUserToEditAndContinue) {
        hintUserToEditAndContinue = false;
        hint =
          'هر زمان خواستید بعضی از کلمات متن ورودی را اصلاح کنید تا در ادامه خروجی مورد نظر شما درست شود.';
      }

      return {
        ...state,
        hint,
        inlineHelpVisible: false,
        hintUserToEditAndContinue,
      };
    }

    default:
      throw new Error('undefined TextPiece inputForm Reducer action');
  }
};

export default reducer;
