/* eslint-disable import/no-unresolved */
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import ApplicationAppBar from '@components/app-bar';
import muiTheme from './theme';

const useStyles = makeStyles((theme) => ({
  '@global': {
    html: {
      overflowX: 'hidden',
      // fontSize: 15,
      // backgroundColor: '#f0eee7',
    },
    '.ml': { marginLeft: theme.spacing(1) },
    '.mt': { marginTop: theme.spacing(1) },
    '.mr': { marginRight: theme.spacing(1) },
    '.mb': { marginBottom: theme.spacing(1) },
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

  const About = lazy(() =>
    import(
      /* webpackChunkName: "pages" */
      '@pages/About'
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
    <Suspense fallback={<div>گر صبر کنی ز غوره حلوا سازی</div>}>
      <ErrorBoundary>
        <Router>
          <ThemeProvider theme={muiTheme}>
            <div id="app-wrapper" className={classes.root}>
              <CssBaseline />
              <ApplicationAppBar />
              <Switch>
                <Route exact path="/">
                  <Redirect to="/quotes" />
                </Route>
                <Route path={['/quotes', '/poem/:input?', '/text/:input?', '/beyt/:input?']}>
                  <Home />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/help">
                  <About />
                </Route>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </ThemeProvider>
        </Router>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
