export const GENERATE_FULLFILLED = 'GENERATE_FULLFILLED';

const reducer = (state, action) => {
  const { input, modelName, output, outputImageAddress, responseTime, error } = action.payload;

  switch (action.type) {
    case GENERATE_FULLFILLED: {
      return {
        ...state,
        input,
        modelName,
        output,
        outputImageAddress,
        responseTime,
        error,
      };
    }

    default:
      throw new Error('undefined Quote Reducer action');
  }
};

export default reducer;
