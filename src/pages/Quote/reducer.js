export const GENERATE_FULLFILLED = 'GENERATE_FULLFILLED';
export const UPDATE_INPUT = 'UPDATE_INPUT';

const reducer = (state, action) => {
  switch (action.type) {
    case GENERATE_FULLFILLED: {
      const { input, modelName, output, outputImageAddress, responseTime, error } = action.payload;
      return {
        ...state,
        input: input.replace('[BOM]', '').trim(),
        modelName,
        output,
        outputImageAddress,
        responseTime,
        error,
      };
    }

    case UPDATE_INPUT: {
      const { input } = action.payload;
      const sanitizedInput = input
        // eslint-disable-next-line no-misleading-character-class
        .replace(/[^ءآأؤئابتثجحخدذرزسشصضطظعغفقلمنهوپچژکگیِةًٌٍَُِّْٰٔ٫\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .substring(0, 64);
      return {
        ...state,
        input: sanitizedInput,
      };
    }

    default:
      throw new Error('undefined Quote Reducer action');
  }
};

export default reducer;
