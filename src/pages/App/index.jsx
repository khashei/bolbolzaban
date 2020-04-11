import React, { lazy, Suspense, useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Provider from './context/provider';
import theme from './theme';
import Home from '@pages/Home';

function App() {
  const ErrorBoundary = lazy(() =>
    import(
      /* webpackChunkName: "app" */
      '@components/error-boundary'
    )
  );

  const Home = lazy(() =>
    import(
      /* webpackChunkName: "pages" */
      '@pages/Home'
    )
  );

  const NotFound = lazy(() =>
    import(
      /* webpackChunkName: "pages" */
      '@pages/PageErrors/NotFound'
    )
  );

  const initialState = {
    list: [
      {
        itemId: 1,
        task: 'Add the delete functionality',
        completed: false,
      },
    ],
  };

  return (
    <Suspense fallback={<div>loading...</div>}>
      <ErrorBoundary>
        <Provider>
          <Router>
            {/* <ThirdPartyServices /> */}
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {/* <DefaultTheme> */}
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
              {/* </DefaultTheme> */}
            </ThemeProvider>
          </Router>
        </Provider>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
