const initialState = {
  app: {
    settings: {
      navbarLink: '/home',
      navbarTitle: 'نوسخن',
    },
    isLoading: true,
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
