const initialState = {
  app: {
    settings: {
      navbarLink: '/home',
      navbarTitle: 'نوسخن',
    },
    isLoading: true,
  },
  deepsher: {
    input: '',
    modelName: '',
    outputs: [],
    responseTime: null,
    error: null,
    statusCode: 200,
    isLoading: null,
  },
  feedback: {},
  snackbar: {},
  subscription: {
    isLoading: false,
    hasSubscribed: false,
    justSubscribed: false,
    // hasSubscriptionFailed
  },
};

export default initialState;
