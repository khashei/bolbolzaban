/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography, Grid, Paper, Radio, Button, makeStyles } from '@material-ui/core';

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
  textFieldMesra: {
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

const InputForm = ({ isLoading, inputLines, style, onSubmit }) => {
  const [formState, setFormState] = useState({
    inputLines,
    style,
    hint: '',
    inlineHelpVisible: false,
    isUserDefined: false,
  });

  const [inputTextRef, setInputTextRef] = useState();

  const handleSubmit = () => {
    const { lines, hint } = InputPreprocessor.process(inputLines);

    if (!lines) {
      setFormState({
        ...formState,
        inlineHelpVisible: true,
      });
    } else {
      setFormState({
        ...formState,
        inlineHelpVisible: false,
        inputLines: lines,
        hint,
      });

      onSubmit(lines, formState.style, true);
    }
  };

  const onRandomSampleClick = () => {
    const randomInput = predefinedPatterns[Math.floor(Math.random() * predefinedPatterns.length)];
    setFormState({
      ...formState,
      inputLines: randomInput.lines,
      style: randomInput.style,
      hint: 'حالا ادامه بدید',
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
          <Typography variant="h5">سرایش شعر</Typography>
        </Grid>
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            onClick={() => {
              setFormState({ ...formState, style: 'free' });
            }}
          >
            <Grid container alignItems="center">
              <Radio
                checked={formState.style === 'free'}
                onChange={handleChange('style')}
                value="free"
                color="primary"
              />
              <Typography variant="subtitle1">شعر نو</Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            onClick={() => {
              setFormState({ ...formState, style: 'classic' });
            }}
          >
            <Grid container alignItems="center">
              <Radio
                checked={formState.style === 'classic'}
                onChange={handleChange('style')}
                value="classic"
                color="primary"
              />
              <Typography variant="subtitle1">شعر کلاسیک</Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            یک یا چند سطر آغازین یک شعر را وارد کنید و بلبل‌زبان شعر را ادامه می‌دهد
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
            id="user-input"
            fullWidth
            required
            placeholder="هرگز نمیرد آنکه دلش زنده شد بعشق"
            value={formState.firstMesra}
            className={classes.textFieldMesra}
            onChange={handleChange('firstMesra')}
            margin="normal"
            variant="filled"
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
            onClick={handleSubmit}
          >
            بسُرای
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

InputForm.propTypes = {
  isLoading: PropTypes.bool,
  inputLines: PropTypes.string,
  style: PropTypes.string,
  onSubmit: PropTypes.func,
};

InputForm.defaultProps = {
  isLoading: false,
  inputLines: '',
  style: 'classic',
  onSubmit: null,
};

export default InputForm;
