import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, AppBar, Tabs, Tab, Typography } from '@material-ui/core';
import UniVerse from '@pages/UniVerse'
import MultiVerse from '@pages/MultiVerse'
import About from '@pages/About'
import PropTypes from 'prop-types';
import Context from '@app-context';
const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    width: '100%',
    backgroundColor: palette.common.lightBackground,
    marginTop: '-50px',
    paddingTop: '50px',
  },
  mainContent: {
    position: 'relative',
  },
}));

function TabContainer(props) {
  return (
    <Typography component='div' style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
function Home() {
  // const { globalState, dispatch } = React.useContext(Context);
  // console.log('Global State', globalState);
  const [value, setValue] = useState(0);
  // const updatedSubscriptionHeight = (value) => {
  //   this.setState({ footerHeight: value });
  // }

  const handleChange = (event, value) => {
    setValue(value);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label='تک بیت' />
          <Tab label='شعر' />
          <Tab label='درباره' />
        </Tabs>
      </AppBar>
      {value === 0 && (
        <TabContainer>
          <UniVerse />
        </TabContainer>
      )}
      {value === 1 && (
        <TabContainer>
          <MultiVerse />
        </TabContainer>
      )}
      {value === 2 && (
        <TabContainer>
          <About />
        </TabContainer>
      )}
    </div>
  );
}

Home.defaultProps = {};
Home.propTypes = {};

export default Home;
