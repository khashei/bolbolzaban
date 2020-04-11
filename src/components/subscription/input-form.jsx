import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { CircularProgress, Divider, Button, Typography, Grid, TextField } from '@material-ui/core';

class SubscriptionInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      isInputValid: false,
    };
  }

  onSubmit = () => {
    const isValid = this.validateInput(this.state.inputText);
    this.setState(
      { inputText: this.state.inputText.trim(), isInputValid: isValid },
      this.submitSubscription,
    );
  };

  handleTextChange = (event) => {
    this.setState({
      inputText: event.target.value,
      isInputValid: this.validateInput(event.target.value),
    });
  };

  submitSubscription = () => {
    this.props.onSubmit(this.state.inputText);
  };

  validateInput = (text) => {
    const input = String(text).toLowerCase();
    const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const mobilePattern = /^[0|۰|٠][9|۹|٩][(]?[0-9|۰-۹|٠-٩]{2}[)]?[-\s\.]?[0-9|۰-۹|٠-٩]{3}[-\s\.]?[0-9|۰-۹|٠-٩]{4}$/i;
    return emailPattern.test(input) || mobilePattern.test(input);
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Divider variant="middle" />
        <Grid container >
          <Typography variant="subtitle1">
        ما در حال پیاده‌سازی اپلیکیشن بلبل‌زبان با قابلیت‌های خیلی جذاب و کاربردی هستیم.
          </Typography>
        </Grid>
        <Grid container >
          <Typography>
             ثبت نام کنید تا زودتر از بقیه خبردار شوید:
          </Typography>
        </Grid>
        <Grid container className={classes.textInputRow}>
          <Grid item xs={9}>
            <TextField
              required
              label="ایمیل یا شماره موبایل ایران"
              fullWidth
              type="email"
              name="email"
              autoComplete="email"
              value={this.state.inputText}
              className={classes.textFieldSubscription}
              onChange={this.handleTextChange}
              variant="filled"
              inputRef={this.setInputTextRef}
              inputProps={{
                'aria-label': 'ایمیل',
              }}
            />

            {/* <Input
              required
              placeholder="ایمیل یا شماره موبایل ایران"
              fullWidth
              type="email"
              name="email"
              autoComplete="email"
              value={this.state.inputText}
              className={classes.textFieldSubscription}
              onChange={this.handleTextChange}
              variant="filled"
              inputRef={this.setInputTextRef}
              inputProps={{
                'aria-label': 'ایمیل',
              }}
            /> */}
          </Grid>
          <Grid item xs={3}>
            <Button
            size="large"
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.onSubmit}
              disabled={!this.state.isInputValid}
            >
              { this.props.isLoading ? <CircularProgress color="secondary" size={22} /> :
              <Typography color="secondary">
                تایید
              </Typography>
              }
            </Button>
          </Grid>
        </Grid>
        { this.props.hasSubscriptionFailed &&
          <Typography color="error">
            ثبت مشخصات به اشکال برخورد. دوباره امتحان کنید.
          </Typography>
        }
      </form>
    );
  }
}

SubscriptionInputForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasSubscriptionFailed: PropTypes.bool.isRequired,
};

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    // backgroundColor: theme.palette.common.darkBackground,
    [theme.breakpoints.up('md')]: {
      padding: '15px 25% 15px 31%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      padding: '15px 25% 15px 25%',
    },
    // [theme.breakpoints.between('xs', 'sm')]: {
    //   width: '60%',
    // },
    [theme.breakpoints.down('sm')]: {
      padding: 20,
    },

  },
  textInputRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFieldSubscription: {
    marginTop: 10,
    padding: 0,
    '& input::placeholder': {
      direction: 'ltr',
    },
    '& input': {
      direction: 'rtl',
    },
  },
  button: {
    marginLeft: 10,
    padding: 0,
    marginTop: 5,
    height: '53px',

  },
  input: {
    display: 'none',
  },
});

export default withStyles(styles, { withTheme: true })(SubscriptionInputForm);
