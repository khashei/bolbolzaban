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
  button: {},
  input: {
    display: 'none',
  },
  group: {},
}));

const InputForm = ({ isLoading, input, onSubmit }) => {
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
      hint: 'دکمه بنویس را دوباره بزنید، تا بلبل زبان یک متن جدید بنویسد.',
      inlineHelpVisible: false,
      isUserDefined: false,
    });

    onSubmit(randomInput.lines, randomInput.style, false);
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
          <Typography variant="h5">نوشتن متن</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            چند کلمه یا سطر نخستین یک متن را وارد کنید و بلبل‌زبان نوشته شما را ادامه می‌دهد.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={onRandomSampleClick}
            variant="outlined"
            className={classes.randomTextButton}
            disabled={isLoading}
            // color='inherit'
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
        {formState.hint && !isLoading && (
          <Grid item xs={12}>
            <HintBox text={formState.hint} />
          </Grid>
        )}
        {formState.inlineHelpVisible && (
          <InlineHelp onRandomSampleClick={onRandomSampleClick} anchor={inputTextRef} />
        )}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
            disabled={isLoading}
            onClick={handleSubmit}
          >
            بنویس
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

InputForm.propTypes = {
  isLoading: PropTypes.bool,
  input: PropTypes.string,
  onSubmit: PropTypes.func,
};

InputForm.defaultProps = {
  isLoading: false,
  input: '',
  onSubmit: null,
};

export default InputForm;