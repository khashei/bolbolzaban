/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMultiVerseContext from '@pages/Home/context/multi-verse-context';
import { GENERATE_TEXT_FULLFILLED } from '@pages/Home/context/multi-verse-reducer';
import InputForm from './InputForm/index';
import ResultContainer from './ResultContainer';
import generateTextRequest from './api';

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
  const { state, dispatch } = useMultiVerseContext();
  const [isLoading, setIsLoading] = useState(false);

  const generateBeyt = async (input, style, byUser) => {
    setIsLoading(true);

    const data = await generateTextRequest({
      style,
      input: `${input}`,
      topk: 40,
      temper: 75,
      isUserDefined: byUser,
    });

    dispatch({
      type: GENERATE_TEXT_FULLFILLED,
      payload: {
        input,
        style,
        output: data.output,
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
