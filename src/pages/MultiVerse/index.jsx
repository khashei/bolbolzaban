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

  const generateText = async (input, style, byUser) => {
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
        input={state.input}
        style={state.style}
        onSubmit={generateText}
      />
      <ResultContainer isLoading={isLoading} output={state.output} error={state.error} />
    </div>
  );
};

MultiVerse.defaultProps = {};
MultiVerse.propTypes = {};

export default MultiVerse;
