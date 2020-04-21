import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputForm from './input-form';
import ResultContainer from './result/container';
import PropTypes from 'prop-types';
import { GenerateSW } from 'workbox-webpack-plugin';
import { generatePath } from 'react-router-dom';
import { generatePoemRequest } from './api';
//import { Map, List } from 'immutable';

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

const TakBeyt = props => {
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

  const generateBeyt = (firstMesra, secondMesra, style, byUser) => {
    setIsLoading(true);
    generatePoemRequest({
      style: style,
      mask: `${firstMesra || '?'}-${secondMesra || '?'}`,
      isUserDefined: byUser,
    });
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

TakBeyt.defaultProps = {};
TakBeyt.propTypes = {};

export default TakBeyt;
