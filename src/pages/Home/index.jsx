/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import UniVerse from '@pages/UniVerse';
import MultiVerse from '@pages/MultiVerse';
import TextPiece from '@pages/TextPiece';
import About from '@pages/About';
import UniVerseProvider from './context/uni-verse/provider';
import MultiVerseProvider from './context/multi-verse/provider';
import TextPieceProvider from './context/text-piece/provider';
import TabContainer from './tab-container';

const useStyles = makeStyles((theme) => ({
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
    <TextPieceProvider>
      <MultiVerseProvider>
        <UniVerseProvider>
          <div className={classes.root}>
            <AppBar position="static">
              <Tabs value={tabIndex} onChange={handleChange} centered>
                <Tab label="شعر" />
                <Tab label="تک بیت" />
                <Tab label="متن" />
                <Tab label="درباره" />
              </Tabs>
            </AppBar>
            {tabIndex === 0 && (
              <TabContainer>
                <MultiVerse />
              </TabContainer>
            )}
            {tabIndex === 1 && (
              <TabContainer>
                <UniVerse />
              </TabContainer>
            )}
            {tabIndex === 2 && (
              <TabContainer>
                <TextPiece />
              </TabContainer>
            )}
            {tabIndex === 3 && (
              <TabContainer>
                <About />
              </TabContainer>
            )}
          </div>
        </UniVerseProvider>
      </MultiVerseProvider>
    </TextPieceProvider>
  );
}

Home.defaultProps = {};
Home.propTypes = {};

export default Home;
