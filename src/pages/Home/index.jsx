import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography } from '@material-ui/core';
import UniVerse from '@pages/UniVerse'
import MultiVerse from '@pages/MultiVerse'
import About from '@pages/About'
import PropTypes from 'prop-types';
import Provider from './context/provider';
import TabContainer from './tab-container';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.common.lightBackground,
    marginTop: '-50px',
    paddingTop: '50px',
  },
  mainContent: {
    position: 'relative',
  },
}));

function Home() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, value) => {
    setTabIndex(value);
  };
  const classes = useStyles();
  return (
    <Provider>
      <div className={classes.root}>
        <AppBar position='static'>
          <Tabs value={tabIndex} onChange={handleChange} centered>
            <Tab label='تک بیت' />
            <Tab label='شعر' />
            <Tab label='درباره' />
          </Tabs>
        </AppBar>
        {tabIndex === 0 && (
          <TabContainer>
            <UniVerse />
          </TabContainer>
        )}
        {tabIndex === 1 && (
          <TabContainer>
            <MultiVerse />
          </TabContainer>
        )}
        {tabIndex === 2 && (
          <TabContainer>
            <About />
          </TabContainer>
        )}
      </div>
    </Provider>
  );
}

Home.defaultProps = {};
Home.propTypes = {};

export default Home;
