/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useTextPieceContext from '@pages/Home/context/text-piece/context';
import { GENERATE_FULLFILLED, UPDATE_INPUT } from '@pages/Home/context/text-piece/reducer';
import generateTextRequest, { TEXT_STYLE } from '../api/generate-text-request';
import InputForm from './InputForm/index';
import ResultContainer from '../components/result-container';

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
      style: TEXT_STYLE,
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
      .replace(/\[KRK\]/g, '[فُلان]')
      .replace(/\[LAT\]/g, '[فُلان]')
      .replace(/\[EOS\]\s*/g, '\n')
      .replace(/\[SEP\]\s*/g, '\n')}`.trim();

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
      <InputForm
        isLoading={isLoading}
        input={state.input}
        hasOutput={state.output.length > 0}
        onSubmit={generateText}
        onGenerateMore={generateMoreText}
      />
      <ResultContainer isLoading={isLoading} output={state.output} error={state.error} />
    </div>
  );
};

TextPiece.defaultProps = {};
TextPiece.propTypes = {};

export default TextPiece;
