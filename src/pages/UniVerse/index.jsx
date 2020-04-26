import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputForm from './InputForm';
import ResultContainer from './ResultContainer';
// import PropTypes from 'prop-types';
// import { GenerateSW } from 'workbox-webpack-plugin';
// import { generatePath } from 'react-router-dom';
import { generatePoemRequest } from './api';
import useUniVerseContext from '@pages/Home/context/uni-verse-context';
import { GENERATE_VERSE_FULLFILLED } from '@pages/Home/context/uni-verse-reducer';

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
  const { state, dispatch } = useUniVerseContext();
  const [isLoading, setIsLoading] = useState(false);

  const generateBeyt = async (firstMesra, secondMesra, style, byUser) => {
    setIsLoading(true);

    const data = await generatePoemRequest({
      style: style,
      mask: `${firstMesra || '?'}-${secondMesra || '?'}`,
      isUserDefined: byUser,
    });
    
    dispatch({
      type: GENERATE_VERSE_FULLFILLED,
      payload: {
        firstMesra, 
        secondMesra, 
        style,
        outputs: data.output,
        error: { code: data.statusCode, message: data.error }
      }
    });

    setIsLoading(false);
  }

  const classes = useStyles();
  return (
    <div className={classes.mainContent}>
      <InputForm
        isLoading={isLoading}
        firstMesra={state.firstMesra}
        secondMesra={state.secondMesra}
        style={state.style}
        onSubmit={generateBeyt} />
      <ResultContainer 
        isLoading={isLoading}
        outputs={state.outputs}
        error={state.error}
        />
    </div>
  );
}
UniVerse.defaultProps = {};
UniVerse.propTypes = {};

export default UniVerse;
