import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Typography,
  Grid,
  Paper,
  Radio,
  Button,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import HintBox from '@components/hint-box';
import InlineHelp from './inline-help'; 
import predefinedPatterns from '@utils/predefined-patterns';
import TakBeytPreprocessor from "./TakBeytPreprocessor";

const useStyles = makeStyles(
  ({ breakpoints, spacing, palette, typography }) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: 20,
      margin: '0 auto',
      [breakpoints.up('md')]: {
        width: '40%',
      },
      [breakpoints.between('sm', 'md')]: {
        width: '60%',
      },
      [breakpoints.down('sm')]: {
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
      marginBottom: spacing.unit / 2,
      float: 'right',
      color: palette.common.noSokhanPrimary,
    },
    menu: {
      width: 200,
    },
    button: {},
    input: {
      display: 'none',
    },
    group: {},
  })
);

const InputForm = props => {
  const [formState, setFormState] = useState({ 
    firstMesra: props.firstMesra,
    secondMesra: props.secondMesra,
    style: props.style,
    hint: "",
    inlineHelpVisible: false
  });

  const [inputTextRef, setInputTextRef] = useState();

  // const [formState, setFormState] = useState({
  //   inlineHelpVisible: false,
  //   isLoading: false,
  //   isUserDefined: true,
  // });
  // const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = () => {
    const { firstMesra, secondMesra, hint } = TakBeytPreprocessor.process(
      formState.firstMesra,
      formState.secondMesra
    );
    
    if (!firstMesra && !secondMesra) {
      setFormState({
        ...formState,
        inlineHelpVisible: true,
      });
    } else {
      props.onSubmit(formState.firstMesra, formState.secondMesra, formState.style);
    }
  };

  const onRandomSampleClick = () => {
    const randomInput =
      predefinedPatterns[Math.floor(Math.random() * predefinedPatterns.length)];
    setRandomInput(randomInput.first, randomInput.second, randomInput.style);
  };

  const setRandomInput = (firstMesra, secondMesra, style) => {
    setFormState({
      ...formState,
      firstMesra,
      secondMesra,
      style,
      hint:
        'حالا سعی کنید بعضی از کلمات را عوض کنید یا بجای آن علامت سوال بگذارید و دوباره امتحان کنید',
      inlineHelpVisible: false,
      //shouldSubmit: true,
      isUserDefined: false,
    });
    props.onSubmit(formState.firstMesra, formState.secondMesra, formState.style);
  };

  // useEffect(() => {
  //   if (formState.shouldSubmit === true) {
  //     console.log('SHOULD SUBMIT');
  //     dispatchGeneratePoem();
  //     setFormState({ ...formState, shouldSubmit: false });
  //   }
  // }, [formState.shouldSubmit]);

  const handleChange = (name) => (event) => {
    setFormState({
      ...formState,
      [name]: event.target.value,
    });
  };

  const classes = useStyles();
  return (
    <form className={classes.container} noValidate autoComplete='off'>
      <Grid container justify='space-around' spacing={16}>
        <Grid item xs={12}>
          <Typography variant='h5'>همسُرایی تک بیت</Typography>
        </Grid>
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            onClick={() => {
              setFormState({ ...formState, style: 'free' });
            }}
          >
            <Grid container alignItems='center'>
              <Radio
                checked={formState.style === 'free'}
                onChange={handleChange('style')}
                value='free'
                color='primary'
              />
              <Typography variant='subtitle1'>سبک آزاد</Typography>
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
            <Grid container alignItems='center'>
              <Radio
                checked={formState.style === 'ferd'}
                onChange={handleChange('style')}
                value='ferd'
                color='primary'
              />
              <Typography variant='subtitle1'>سبک فردوسی</Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='subtitle1'>
            الگوی بیتی را که می‌خواهید بسُرایید، با ترکیب کلمات و علامت سوال
            «؟»، مانند نمونه زیر وارد کنید. بلبل زبان سعی می‌کند با حفظ کلمات
            شما و جایگزینی هر «؟» با یک کلمه‌ی مناسب، بیت را کامل کند.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={onRandomSampleClick}
            className={classes.randomTextButton}
            disabled={props.isLoading}
            color='inherit'
            size='small'
          >
            الگوی نمونه
          </Button>
          <TextField
            id='user-input'
            // rows="1"
            // rowsMax="1"
            // multiline
            fullWidth
            required
            placeholder='هرگز ؟ آنکه ؟ ؟ بعشق'
            value={formState.firstMesra}
            className={classes.textFieldMesra}
            onChange={handleChange('firstMesra')}
            margin='normal'
            variant='filled'
          />
          <TextField
            id='user-input'
            // rows="1"
            // rowsMax="1"
            // multiline
            fullWidth
            required
            placeholder='؟ است بر ؟ ؟ ؟‌ ما'
            value={formState.secondMesra}
            className={classes.textFieldMesra}
            onChange={handleChange('secondMesra')}
            margin='normal'
            variant='filled'
            inputRef={setInputTextRef.bind(this)}
          />
        </Grid>
        {props.hint && !props.isLoading && (
          <Grid item xs={12}>
            <HintBox hint={props.hint} />
          </Grid>
        )}
        {formState.inlineHelpVisible && (
          <InlineHelp
            onRandomSample={setRandomInput}
            onRandomSampleClick={onRandomSampleClick}
            anchor={inputTextRef}
          />
        )}
        <Grid item xs={12}>
          <Button
            variant='contained'
            color='primary'
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
  firstMesra: "",
  secondMesra: "",
  style: "free",
  onSubmit: null,
};

export default InputForm;
