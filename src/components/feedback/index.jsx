import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import withQueryParams from 'react-router-query-params';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
  Grid,
  MobileStepper,
} from '@material-ui/core';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import CloseIcon from '@material-ui/icons/Close';
import FeedbackForm from './feedback-form';

class BolbolzabanHelpPage extends React.Component {
  state = {
    open: true,
    activeStep: 0,
  };

  sendMessage = () => {
  };

  handleClose = () => {
    const { onClose } = this.props;
    this.setState({ open: false });
    onClose();
  };

  render() {
    const { classes, fullScreen } = this.props;
    const { activeStep } = this.state;
    const maxSteps = 7;
    return (
      <Dialog
        fullScreen={fullScreen}
        open={this.state.open}
        onClose={this.handleClose}
        className={classes.helpModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={classes.title} id="alert-dialog-title">
          <Grid
            container
            direction="row-reverse"
            justify="space-between"
            alignItems="center"
          >
            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6">تماس با بلبل‌زبان</Typography>
          </Grid>
        </DialogTitle>
        <DialogContent className={classes.content}>
          <FeedbackForm />
        </DialogContent>
        <DialogActions className={classes.actions}>
          {/* <Button
                // variant="contained"
                // color="primary"
            className={classes.nextButton}
            size="large"
            onClick={this.sendMessage}
            disabled={activeStep === maxSteps - 1}
          >
                sent
          </Button> */}
        </DialogActions>
      </Dialog>
    );
  }
}

BolbolzabanHelpPage.propTypes = {
  classes: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  fullScreen: PropTypes.bool.isRequired,
  match: PropTypes.object,
  history: PropTypes.object,
};

BolbolzabanHelpPage.defaultProps = {
  classes: null,
  match: {},
  history: {},
};

const styles = theme => ({
  title: {
    backgroundColor: theme.palette.common.lightBackground,
  },
  content: {
    backgroundColor: theme.palette.common.lightBackground,
  },
  actions: {
    margin: 0,
    backgroundColor: theme.palette.common.lightBackground,
  },
  nextButton: {
    paddingLeft: 35,
  },
});

export default withStyles(styles, {
  withTheme: true,
})(withRouter(withQueryParams()(withMobileDialog({ breakpoint: 'sm' })(BolbolzabanHelpPage))));
