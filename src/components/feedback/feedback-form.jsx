import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TextField, Typography, Grid, Paper, Radio, Button, Input } from '@material-ui/core/';
import withStyles from '@material-ui/core/styles/withStyles';
import { feedback } from '../../../../../actions/bolbolzaban/feedback';

@connect(state => ({
  isLoading: state.getIn(['deepsher', 'isLoading']),
}), {
  feedback,
})

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackMessage: '',
      userEmail: '',
      isFormValid: true,
    };
  }

  onSubmit = () => {
    this.setState(
      {
        feedbackMessage: this.state.feedbackMessage.trim(),
        userEmail: this.state.userEmail.trim(),
      },
      () => {
        if (this.state.isFormValid) {
          this.props.feedback(this.state.userEmail, this.state.feedbackMessage);
        }
      },
    );
  };

   handleTextchange = (event) => {
     this.setState({ feedbackMessage: event.target.value });
   }

  handleEmailChange = (event) => {
    this.setState({ userEmail: event.target.value }, this.validateForm(event.target.value));
  }
  // handleChange = name => (event) => {
  //   this.setState({
  //     [name]: event.target.value,
  //   }, this.validateForm());
  // };

  validateForm = (email) => {
    const input = email;// || String(this.state.userEmail).toLowerCase();
    console.log('inout ',input);
    const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    this.setState({ isFormValid: emailPattern.test(input) || input === '' });
  };

  render() {
    const { classes, isLoading } = this.props;
    const { isFormValid } = this.state;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container justify="space-around" spacing={16}>
          {/* <Grid item xs={12}>
            <Typography variant="h5">
            نظرسنجی
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1">
            نظرتان در مورد بلبل جیست
            </Typography>
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              rows="5"
              rowsMax="5"
              multiline
              fullWidth
              required
              label="متن"
              value={this.state.feedbackMessage}
              className={classes.textFieldMesra}
              onChange={this.handleTextchange}
              margin="normal"
              variant="filled"
            />
            <TextField
              label="ایمیل"
              fullWidth
              type="email"
              name="email"
              autoComplete="email"
              variant="filled"
              value={this.state.inputText}
              className={classes.email}
              onChange={this.handleEmailChange}
              margin="normal"
              inputProps={{
                'aria-label': 'ایمیل',
              }}
            />
          </Grid>
          {!isFormValid &&
            <Typography>
              ایمیل معتبر نیست
            </Typography>
            }
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.button}
              onClick={this.onSubmit}
            >
            ارسال نظر یا پیشنهاد
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
  feedback: PropTypes.func,
};

InputForm.defaultProps = {
  feedback: null,
  isLoading: false,
};

const styles = theme => ({
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // padding: 20,
    // margin: '0 auto',
    // [theme.breakpoints.up('md')]: {
    //   width: '40%',
    // },
    // [theme.breakpoints.between('sm', 'md')]: {
    //   width: '60%',
    // },
    // [theme.breakpoints.down('sm')]: {
    //   width: '100%',
    // },
  },
  textInputRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  email: {
    marginTop: 0,
    // padding: 0,
    '& input::placeholder': {
      direction: 'ltr',
    },
    '& input': {
      direction: 'rtl',
    },
  },
  button: {
    // marginLeft: 10,
    padding: 0,
    marginTop: 5,
  },

  // textFieldMesra: {
  //   margin: 0,
  //   padding: 0,
  //   fontSize: '16px',
  //   '& input': {
  //     padding: 15,
  //   },
  //   'select:focus,textarea:focus,input:focus': {
  //     fontSize: '16px',
  //   },
  // },
  // randomTextButton: {
  //   marginBottom: theme.spacing.unit / 2,
  //   float: 'right',
  //   color: theme.palette.common.noSokhanPrimary,
  // // },
  // menu: {
  //   width: 200,
  // },
  // button: {
  // },
  // input: {
  //   display: 'none',
  // },
  // group: {
  // },
});

export default withStyles(styles, { withTheme: true })(InputForm);
