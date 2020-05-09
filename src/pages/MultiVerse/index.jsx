/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useUniVerseContext from '@pages/Home/context/uni-verse-context';
import { GENERATE_VERSE_FULLFILLED } from '@pages/Home/context/uni-verse-reducer';
import InputForm from './InputForm/index';
import ResultContainer from './ResultContainer';
import generateLineRequest from './api';

const useStyles = makeStyles(() => ({
  // root: {
  //   width: '100%',
  //   backgroundColor: theme.palette.common.lightBackground,
  //   //marginTop: '-50px',
  //   //paddingTop: '50px',
  // },
  root: {
    position: 'relative',
  },
}));

const MultiVerse = () => {
  const { state, dispatch } = useUniVerseContext();
  const [isLoading, setIsLoading] = useState(false);

  const generateBeyt = async (firstMesra, secondMesra, style, byUser) => {
    setIsLoading(true);

    const data = await generateLineRequest({
      style,
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
        error: data.statusCode === 200 ? null : { code: data.statusCode, message: data.error },
      },
    });

    setIsLoading(false);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <InputForm
        isLoading={isLoading}
        firstMesra={state.firstMesra}
        secondMesra={state.secondMesra}
        style={state.style}
        onSubmit={generateBeyt}
      />
      <ResultContainer isLoading={isLoading} outputs={state.outputs} error={state.error} />
    </div>
  );
};

MultiVerse.defaultProps = {};
MultiVerse.propTypes = {};

export default MultiVerse;
