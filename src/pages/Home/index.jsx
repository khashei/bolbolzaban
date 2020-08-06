/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import UniVerse from '@pages/UniVerse';
import Quote from '@pages/Quote';
import MultiVerse from '@pages/gpt2/MultiVerse';
import TextPiece from '@pages/gpt2/TextPiece';
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

const Home = () => {
  const history = useHistory();
  const location = useLocation();

  const urlPathToTabName = (path) => path.substr(1).split('/', 1)[0];
  const tabNameToUrlPath = (tabName) => `/${tabName}`;
  const [selectedTab, setSelectedTab] = useState(urlPathToTabName(location.pathname.toLowerCase()));

  const handleChange = (event, value) => {
    history.push(tabNameToUrlPath(value));
  };

  useEffect(() => {
    return () => {
      setSelectedTab(urlPathToTabName(history.location.pathname.toLowerCase()));
    };
  }, [history.location]);

  const classes = useStyles();
  return (
    <TextPieceProvider>
      <MultiVerseProvider>
        <UniVerseProvider>
          <div className={classes.root}>
            <AppBar position="static">
              <Tabs value={selectedTab} onChange={handleChange} centered>
                <Tab label="چامه‌ها" value="quotes" />
                <Tab label="شعر" value="poem" />
                <Tab label="متن" value="text" />
                <Tab label="بیت" value="beyt" />
                <Tab label="..." value="about" />
              </Tabs>
            </AppBar>
            <TabContainer>
              {selectedTab === 'quotes' && <Quote />}
              {selectedTab === 'poem' && <MultiVerse />}
              {selectedTab === 'text' && <TextPiece />}
              {selectedTab === 'beyt' && <UniVerse />}
              {selectedTab === 'about' && <About />}
            </TabContainer>
          </div>
        </UniVerseProvider>
      </MultiVerseProvider>
    </TextPieceProvider>
  );
};

Home.defaultProps = {};
Home.propTypes = {};

export default Home;
