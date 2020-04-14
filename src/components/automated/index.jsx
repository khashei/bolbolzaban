import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TextField, Typography, Grid, Paper, Radio, Button } from '@material-ui/core/';
import withStyles from '@material-ui/core/styles/withStyles';
import { generatePoem } from '../../../../../actions/bolbolzaban/generate-poem';
// import InputHintBox from './input-hint-box';
// import RandomInputBox from './random-input-box';
import BeytPreprocessor from '../../utils/beyt-preprocessor';
import predefinedPatterns from '../../utils/predefined-patterns';

@connect(state => ({
  isLoading: state.getIn(['deepsher', 'isLoading']),
}), {
  generatePoem,
})

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstMesra: '',
      secondMesra: '',
      style: 'free',
      hint: null,
      inputTextRef: null,
      randomInputVisible: false,
    };
  }

  onSubmit = () => {
    const { firstMesra, secondMesra, hint } =
      BeytPreprocessor.process(this.state.firstMesra, this.state.secondMesra);
    const randomInputVisible = !firstMesra && !secondMesra;

    if (randomInputVisible) {
      this.setState({
        firstMesra, secondMesra, hint, randomInputVisible,
      });
    } else {
      this.setState({
        firstMesra, secondMesra, hint, randomInputVisible,
      }, this.dispatchGeneratePoem(true));
    }
  };

  onRandomSampleClick = () => {
    const randomInput = predefinedPatterns[Math.floor(Math.random() * predefinedPatterns.length)];
    this.setRandomInput(randomInput.first, randomInput.second, randomInput.style);
  };

  setRandomInput = (firstMesra, secondMesra, style) => {
    this.setState({
      firstMesra,
      secondMesra,
      style,
      hint: 'حالا سعی کنید بعضی از کلمات را عوض کنید یا بجای آن علامت سوال بگذارید و دوباره امتحان کنید',
      randomInputVisible: false,
    }, this.dispatchGeneratePoem(false));
  };

  setInputTextRef = (node) => {
    this.setState({
      inputTextRef: node,
    });
  };

  dispatchGeneratePoem = isUserDefined => () => {
    const firstMesra = this.state.firstMesra || '?';
    const secondMesra = this.state.secondMesra || '?';
    this.props.generatePoem(this.state.style, `${firstMesra}-${secondMesra}`, isUserDefined);
  };

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes, isLoading } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container justify="space-around" spacing={16}>
          <Grid item xs={12}>
            <Typography variant="h5">
            همسُرایی
            </Typography>
          </Grid>
    
          <Grid item xs={12}>
            <Typography variant="subtitle1">
            الگوی بیتی را که می‌خواهید بسُرایید، با ترکیب کلمات و علامت سوال «؟»،
             مانند نمونه زیر وارد کنید. بلبل زبان سعی می‌کند با حفظ کلمات شما و جایگزینی هر «؟» با یک کلمه‌ی مناسب، بیت را کامل کند.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {/* <Button
              onClick={this.onRandomSampleClick}
              className={classes.randomTextButton}
              disabled={isLoading}
              color="inherit"
              size="small"
            >
              الگوی نمونه
            </Button> */}    
                  
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.button}
              onClick={this.onRandomSampleClick}
            >
            سرایش
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

InputForm.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  generatePoem: PropTypes.func,
};

InputForm.defaultProps = {
  generatePoem: null,
  isLoading: false,
};

const styles = theme => ({
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
    marginBottom: theme.spacing.unit / 2,
    float: 'right',
    color: theme.palette.common.noSokhanPrimary,
  },
  menu: {
    width: 200,
  },
  button: {
  },
  input: {
    display: 'none',
  },
  group: {
  },
});

export default withStyles(styles, { withTheme: true })(InputForm);
