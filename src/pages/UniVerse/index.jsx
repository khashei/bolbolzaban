import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputForm from './InputForm';
import ResultContainer from './Result/container';
import PropTypes from 'prop-types';
import { GenerateSW } from 'workbox-webpack-plugin';
import { generatePath } from 'react-router-dom';
import { generatePoemRequest } from './api';
//import { Map, List } from 'immutable';
import { BASE_PATH } from '@app-settings';

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

const UniVerse = props => {
  const [result, setResult] = useState({
    input: '',
    modelName: '',
    outputs: [],
    responseTime: null,
    error: null,
    statusCode: 200,
  });

  const [isLoading, setIsLoading] = useState(false);

  // const { globalState, dispatch } = React.useContext(Context);
  // console.log('Global State', globalState);
  // const [value, setValue] = useState(0);
  // const updatedSubscriptionHeight = (value) => {
  //   this.setState({ footerHeight: value });
  // }

  const generateBeyt = async (firstMesra, secondMesra, style, byUser) => {
    setIsLoading(true);
    // const x = await generatePoemRequest({
    //   style: style,
    //   mask: `${firstMesra || '?'}-${secondMesra || '?'}`,
    //   isUserDefined: byUser,
    // });

    let response = await fetch(`${BASE_PATH}/deepsher/${style}/${firstMesra || '?'}-${secondMesra || '?'}`);
    let data = await response.json();
    console.log('gX', data);

    setIsLoading(false);
  }

  const classes = useStyles();
  return (
    <div className={classes.mainContent}>
      <InputForm
        isLoading={false}
        onSubmit={generateBeyt} />
      {isLoading && (<p>loading...</p>)}
      <ResultContainer />
    </div>
  );
}
UniVerse.defaultProps = {};
UniVerse.propTypes = {};

export default UniVerse;
