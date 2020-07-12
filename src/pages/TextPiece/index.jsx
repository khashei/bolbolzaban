/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useTextPieceContext from '@pages/Home/context/text-piece/context';
import { GENERATE_FULLFILLED, UPDATE_INPUT } from '@pages/Home/context/text-piece/reducer';
import InputForm from './InputForm/index';
import ResultContainer from './ResultContainer';
import generateTextRequest from './api';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
}));

const TextPiece = () => {
  const { state, dispatch } = useTextPieceContext();
  const [isLoading, setIsLoading] = useState(false);

  const generateText = async (input, byUser) => {
    setIsLoading(true);

    const data = await generateTextRequest({
      input,
      topk: 40,
      temperature: 75,
      isUserDefined: byUser,
    });

    dispatch({
      type: GENERATE_FULLFILLED,
      payload: {
        input,
        normalizedInput: data.input,
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

    generateText(input, true);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <InputForm isLoading={isLoading} input={state.input} onSubmit={generateText} />
      <ResultContainer
        isLoading={isLoading}
        output={state.output}
        error={state.error}
        onGenerateMore={generateMoreText}
      />
    </div>
  );
};

TextPiece.defaultProps = {};
TextPiece.propTypes = {};

export default TextPiece;
