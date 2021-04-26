/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography, Grid, Button, makeStyles } from '@material-ui/core';
import HintBox from '@components/hint-box';
import InlineHelp from '@components/inline-help';
import SupportUs from '@components/support-us';
import predefinedPatterns from './predefined-patterns';
import initialState from './initial-state';
import reducer, { UPDATE_INPUT, GENERATE, GENERATE_FROM_SAMPLES, GENERATE_MORE } from './reducer';

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
  initialState.input = input;
  const [formState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: UPDATE_INPUT,
      payload: {
        input,
      },
    });
  }, [input]);

  // eslint-disable-next-line no-unused-vars
  const [inputTextRef, setInputTextRef] = useState();

  const handleSubmit = () => {
    dispatch({
      type: GENERATE,
      payload: {
        hasOutput,
      },
    });

    if (formState.input) onSubmit(formState.input, true);
  };

  const handleGenerateMore = () => {
    dispatch({
      type: GENERATE_MORE,
      payload: {},
    });

    onGenerateMore();
  };

  const onRandomSampleClick = () => {
    const { lines } = predefinedPatterns[Math.floor(Math.random() * predefinedPatterns.length)];

    dispatch({
      type: UPDATE_INPUT,
      payload: {
        input: lines,
      },
    });

    dispatch({
      type: GENERATE_FROM_SAMPLES,
      payload: {},
    });

    onSubmit(lines, false);
  };

  const handleInputChange = (event) => {
    dispatch({
      type: UPDATE_INPUT,
      payload: {
        input: event.target.value,
      },
    });
  };

  const classes = useStyles();
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Grid container justify="space-around" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">نوشتن متن</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            چند کلمه یا سطر نخستین یک متن را وارد کنید و بلبل‌زبان نوشته شما را ادامه می‌دهد.
          </Typography>
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
            // disabled={isLoading}
            disabled="True"
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
            onChange={handleInputChange}
            placeholder="در یک اتفاق شگفت انگیز، پژوهشگران موفق به یافتن یک گونه اسب شاخدار شدند که می‌تواند فارسی صحبت کند."
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
          <InlineHelp
            onRandomSampleClick={onRandomSampleClick}
            anchor={inputTextRef}
            text="با بلبل‌زبان صحبت کنید"
          />
        )}
        <Grid item xs={hasOutput ? 6 : 12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
            // disabled={isLoading}
            disabled="True"
            onClick={handleSubmit}
          >
            {hasOutput ? 'یکی دیگه بنویس' : 'بنویس'}
          </Button>
          <Grid item xs={12}>
            <SupportUs />
          </Grid>
        </Grid>
        {hasOutput && (
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.button}
              disabled={isLoading}
              onClick={handleGenerateMore}
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
