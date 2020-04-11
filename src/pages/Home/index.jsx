import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, AppBar, Tabs, Tab, Typography } from '@material-ui/core';
import InputForm from '@components/input-form';
import ResultContainer from '@components/result/container';
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
          {/* <Tab label="بلبل زبانی" /> */}
          <Tab label='همسُرایی' />
          <Tab label='بیشتر' />
        </Tabs>
      </AppBar>
      {value === 0 && (
        <TabContainer>
          {
            <>
              <div className={classes.mainContent}>
                <InputForm />
                <ResultContainer />
              </div>
            </>
          }
        </TabContainer>
      )}
      {value === 1 && (
        <TabContainer>
          {(!this.props.hasSubscribed || this.props.justSubscribed) && (
            <SubscriptionContainer
              subscriptionHeight={this.updatedSubscriptionHeight}
            />
          )}
          {!this.props.hasIntroDismissed && <LandingIntro />}
        </TabContainer>
      )}
    </div>
  );
}

Home.defaultProps = {};
Home.propTypes = {};

export default Home;
