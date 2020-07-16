/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography, Grid, Button, makeStyles } from '@material-ui/core';
import HintBox from '@components/hint-box';
import InlineHelp from './inline-help';
import predefinedPatterns from './predefined-patterns';
import InputPreprocessor from './input-preprocessor';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 20,
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '60%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  textInput: {
    margin: 0,
    padding: 0,
    fontSize: '16px',
    '& input': {
      padding: 15,
    },
    'select:focus,textarea:focus,input:focus': {
      fontSize: '16px',
    },
  },
  randomTextButton: {
    marginBottom: theme.spacing(0.5),
    float: 'left',
    color: theme.palette.primary.main,
  },
  menu: {
    width: 200,
  },
  input: {
    display: 'none',
  },
}));

const InputForm = ({ isLoading, input, hasOutput, onSubmit, onGenerateMore }) => {
  const [formState, setFormState] = useState({
    input,
    hint: '',
    inlineHelpVisible: false,
    isUserDefined: false,
  });

  useEffect(() => {
    setFormState({ ...formState, input });
  }, [input]);

  // eslint-disable-next-line no-unused-vars
  const [inputTextRef, setInputTextRef] = useState();

  const handleSubmit = () => {
    const { lines, hint } = InputPreprocessor.process(formState.input);

    if (!lines) {
      setFormState({
        ...formState,
        inlineHelpVisible: true,
      });
    } else {
      setFormState({
        ...formState,
        inlineHelpVisible: false,
        input: lines,
        hint,
      });

      onSubmit(lines, true);
    }
  };

  const onRandomSampleClick = () => {
    const randomInput = predefinedPatterns[Math.floor(Math.random() * predefinedPatterns.length)];
    setFormState({
      ...formState,
      input: randomInput.lines,
      hint: 'دکمه «بسُرای» را دوباره بزنید تا یک ادامه کاملا جدید سروده شود.',
      inlineHelpVisible: false,
      isUserDefined: false,
    });

    onSubmit(randomInput.lines, false);
  };

  const handleChange = (name) => (event) => {
    setFormState({
      ...formState,
      [name]: event.target.value,
    });
  };

  const classes = useStyles();
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Grid container justify="space-around" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">سُرایش شعر</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            چند سطر یا مصرع اول یک شعر را مانند نمونه وارد کنید و با همراهی بلبل‌زبان ادامه شعر را
            بسرایید.
          </Typography>
          <ul>
            <li>
              هر مصرع را با عبارت <b>(مصرع)</b> شروع کنید.
            </li>
            <li>بین هر دو مصرع یک خط خالی رد کنید.</li>
          </ul>
        </Grid>
        {formState.hint && !isLoading && (
          <Grid item xs={12}>
            <HintBox text={formState.hint} />
          </Grid>
        )}
        <Grid item xs={12}>
          <Button
            onClick={onRandomSampleClick}
            variant="outlined"
            className={classes.randomTextButton}
            disabled={isLoading}
            size="small"
          >
            نمونه
          </Button>
          <TextField
            id="text-input"
            fullWidth
            required
            className={classes.textInput}
            value={formState.input}
            onChange={handleChange('input')}
            placeholder="(مصرع) هرگز نمیرد آنکه دلش زنده شد بعشق"
            multiline
            inputProps={{
              maxLength: 2000,
            }}
            margin="normal"
            variant="outlined"
            inputRef={setInputTextRef.bind(this)}
          />
        </Grid>
        {formState.inlineHelpVisible && (
          <InlineHelp onRandomSampleClick={onRandomSampleClick} anchor={inputTextRef} />
        )}
        <Grid item xs={hasOutput ? 6 : 12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {hasOutput ? 'یکی دیگه بسُرای' : 'بسُرای'}
          </Button>
        </Grid>
        {hasOutput && (
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.button}
              disabled={isLoading}
              onClick={onGenerateMore}
            >
              خوبه، ادامه بده
            </Button>
          </Grid>
        )}
      </Grid>
    </form>
  );
};

InputForm.propTypes = {
  isLoading: PropTypes.bool,
  input: PropTypes.string,
  hasOutput: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onGenerateMore: PropTypes.func.isRequired,
};

InputForm.defaultProps = {
  isLoading: false,
  input: '',
};

export default InputForm;
