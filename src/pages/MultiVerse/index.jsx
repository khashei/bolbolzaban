/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMultiVerseContext from '@pages/Home/context/multi-verse-context';
import { GENERATE_TEXT_FULLFILLED, UPDATE_INPUT } from '@pages/Home/context/multi-verse-reducer';
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
      input,
      topk: 40,
      temperature: 75,
      isUserDefined: byUser,
    });

    dispatch({
      type: GENERATE_TEXT_FULLFILLED,
      payload: {
        input,
        normalizedInput: data.input,
        style,
        output: data.output,
        error: data.statusCode === 200 ? null : { code: data.statusCode, message: data.error },
      },
    });

    setIsLoading(false);
  };

  const generateMoreText = async () => {
    const parts = state.output[0].split('<s>');
    const input = `${state.input} ${parts[1]
      .trim()
      .replace(/\[BOM\]/g, '\n(مصرع)')
      .replace(/\[EOS\]/g, '\n')
      .replace(/\[SEP\]/g, '\n')}`.trim();

    dispatch({
      type: UPDATE_INPUT,
      payload: {
        input,
      },
    });

    generateText(input, state.style, true);
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
      <ResultContainer
        isLoading={isLoading}
        output={state.output}
        error={state.error}
        onGenerateMore={generateMoreText}
      />
    </div>
  );
};

MultiVerse.defaultProps = {};
MultiVerse.propTypes = {};

export default MultiVerse;
