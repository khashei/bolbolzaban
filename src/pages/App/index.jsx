import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Provider from './context/provider';
import theme from './theme';
import ApplicationAppBar from '@components/app-bar';

const useStyles = makeStyles(theme => ({
  '@global': {
    html: {
      overflowX: 'hidden',
      fontSize: 15,
      backgroundColor: '#f0eee7',
    },
    '.ml': { marginLeft: theme.spacing.unit },
    '.mt': { marginTop: theme.spacing.unit },
    '.mr': { marginRight: theme.spacing.unit },
    '.mb': { marginBottom: theme.spacing.unit },
  },
  root: {
    // paddingTop: 64,
    cursor: 'default',
    backgroundColor: '#f0eee7',
    minHeight: '100vh',
  },
}));

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
      '@pages/Errors/NotFound'
    )
  );

  const classes = useStyles();
  return (
    <Suspense fallback={<div>loading...</div>}>
      <ErrorBoundary>
        <Provider>
          <Router>
            {/* <ThirdPartyServices /> */}
            <ThemeProvider theme={theme}>
              <div id='app-wrapper' className={classes.root}>
                <CssBaseline />
                <ApplicationAppBar />
                <Switch>
                  <Route exact path='/'>
                    <Home />
                  </Route>
                  <Route>
                    <NotFound />
                  </Route>
                </Switch>
              </div>
            </ThemeProvider>
          </Router>
        </Provider>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
