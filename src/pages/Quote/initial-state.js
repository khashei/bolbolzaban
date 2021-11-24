import generateRandomContext from './api/generate-random-context';

const quoteInitialState = {
  input: generateRandomContext(),
  modelName: '',
  output: [],
  outputImageAddress: '',
  responseTime: '',
  error: {},
};

export default quoteInitialState;
