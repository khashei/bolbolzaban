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

const InputForm = ({ isLoading, firstMesra, secondMesra, style, onSubmit }) => {
  const [formState, setFormState] = useState({
    firstMesra,
    secondMesra,
    style,
    hint: '',
    inlineHelpVisible: false,
    isUserDefined: false,
  });

  const [inputTextRef, setInputTextRef] = useState();

  const handleSubmit = () => {
    const { normalizedFirstMesra, normalizedSecondMesra, hint } = InputPreprocessor.process(
      formState.firstMesra,
      formState.secondMesra
    );

    if (!normalizedFirstMesra && !normalizedSecondMesra) {
      setFormState({
        ...formState,
        inlineHelpVisible: true,
      });
    } else {
      setFormState({
        ...formState,
        inlineHelpVisible: false,
        firstMesra: normalizedFirstMesra,
        secondMesra: normalizedSecondMesra,
        hint,
      });

      onSubmit(normalizedFirstMesra, normalizedSecondMesra, formState.style, true);
    }
  };

  const onRandomSampleClick = () => {
    const randomInput = predefinedPatterns[Math.floor(Math.random() * predefinedPatterns.length)];
    setFormState({
      ...formState,
      firstMesra: randomInput.firstMesra,
      secondMesra: randomInput.secondMesra,
      style: randomInput.style,
      hint:
        'حالا سعی کنید بعضی از کلمات را عوض کنید یا بجای آن علامت سوال بگذارید و دوباره امتحان کنید',
      inlineHelpVisible: false,
      isUserDefined: false,
    });

    onSubmit(randomInput.firstMesra, randomInput.secondMesra, randomInput.style, false);
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
          <Typography variant="h5">همسُرایی تک بیت</Typography>
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
              <Typography variant="subtitle1">سبک آزاد</Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            onClick={() => {
              setFormState({ ...formState, style: 'ferd' });
            }}
          >
            <Grid container alignItems="center">
              <Radio
                checked={formState.style === 'ferd'}
                onChange={handleChange('style')}
                value="ferd"
                color="primary"
              />
              <Typography variant="subtitle1">سبک فردوسی</Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            الگوی بیتی را که می‌خواهید بسُرایید، با ترکیب کلمات و علامت سوال «؟»، مانند نمونه زیر
            وارد کنید. بلبل زبان سعی می‌کند با حفظ کلمات شما و جایگزینی هر «؟» با یک کلمه‌ی مناسب،
            بیت را کامل کند.
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
            الگوی نمونه
          </Button>
          <TextField
            id="first-mesra-input"
            fullWidth
            required
            placeholder="؟ بار ؟ کردی و دیدی ثمرش را"
            value={formState.firstMesra}
            className={classes.textFieldMesra}
            onChange={handleChange('firstMesra')}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="second-mesra-input"
            fullWidth
            required
            placeholder="نیکی چه بدی داشت که ؟ نکردی"
            value={formState.secondMesra}
            className={classes.textFieldMesra}
            onChange={handleChange('secondMesra')}
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
  firstMesra: PropTypes.string,
  secondMesra: PropTypes.string,
  style: PropTypes.string,
  onSubmit: PropTypes.func,
};

InputForm.defaultProps = {
  isLoading: false,
  firstMesra: '',
  secondMesra: '',
  style: 'free',
  onSubmit: null,
};

export default InputForm;
