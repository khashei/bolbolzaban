import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import {
  TextField,
  Typography,
  Grid,
  Paper,
  Radio,
  Button,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
// import { generatePoem } from '../../../../../actions/bolbolzaban/generate-poem';
import InputHintBox from './input-hint-box';
import RandomInputBox from './random-input-box';
import BeytPreprocessor from '@utils/beyt-preprocessor';
import predefinedPatterns from '@utils/predefined-patterns';

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

// @connect(
//   (state) => ({
//     isLoading: state.getIn(['deepsher', 'isLoading']),
//   }),
//   {
//     generatePoem,
//   }
// )
const InputForm = () => {
  const [formState, setFormState] = useState({
    firstMesra: '',
    secondMesra: '',
    style: 'free',
    hint: null,
    randomInputVisible: false,
  });
  // const [inputTextRef, setInputTextRef] = useState();

  const onSubmit = () => {
    // TODO DISPATCH
    const { firstMesra, secondMesra, hint } = BeytPreprocessor.process(
      formState.firstMesra,
      formState.secondMesra
    );
    const randomInputVisible = !firstMesra && !secondMesra;
    console.log('randomInputVisible is ', randomInputVisible);
    if (randomInputVisible) {
      setFormState({
        ...formState,
        firstMesra,
        secondMesra,
        hint,
        randomInputVisible,
      });
    } else {
      setFormState({
        ...formState,
        firstMesra,
        secondMesra,
        hint,
        randomInputVisible,
      });
      dispatchGeneratePoem(true);
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
      randomInputVisible: false,
    });
    // TODO
    dispatchGeneratePoem(false);
  };

  // setInputTextRef = (node) => {
  //   this.setState({
  //     inputTextRef: node,
  //   });
  // };

  const dispatchGeneratePoem = (isUserDefined) => () => {
    const firstMesra = formState.firstMesra || '?';
    const secondMesra = formState.secondMesra || '?';
    // TODO
    console.log(
      'DISPATCH WITH THIS',
      style,
      `${firstMesra}-${secondMesra}`,
      isUserDefined
    );
    // this.props.generatePoem(
    //   style,
    //   `${firstMesra}-${secondMesra}`,
    //   isUserDefined
    // );
  };

  const handleChange = (name) => (event) => {
    setFormState({
      ...formState,
      [name]: event.target.value,
    });
  };

  const isLoading = false;
  const classes = useStyles();
  return (
    <form className={classes.container} noValidate autoComplete='off'>
      <Grid container justify='space-around' spacing={16}>
        <Grid item xs={12}>
          <Typography variant='h5'>همسُرایی</Typography>
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
            disabled={isLoading}
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
            // inputRef={this.setInputTextRef}
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
            // inputRef={this.setInputTextRef}
          />
        </Grid>
        {formState.hint && !isLoading && (
          <Grid item xs={12}>
            <InputHintBox hint={formState.hint} />
          </Grid>
        )}
        {formState.randomInputVisible && (
          <RandomInputBox
            onRandomSample={setRandomInput}
            onRandomSampleClick={onRandomSampleClick}
            // anchor={formState.inputTextRef}
          />
        )}
        <Grid item xs={12}>
          <Button
            variant='contained'
            color='primary'
            fullWidth
            className={classes.button}
            onClick={onSubmit}
          >
            بسُرای
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

InputForm.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  generatePoem: PropTypes.func,
};

InputForm.defaultProps = {
  generatePoem: null,
  isLoading: false,
};

export default InputForm;
