import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CheckCircle from '@material-ui/icons/CheckCircle';
import { Grid, Typography } from '@material-ui/core';


const SubscriptionMessageBar = props => (
  <div className={props.classes.root}>
    <CheckCircle color="primary" />
    <Typography className={props.classes.text}>
      اطلاعات تماس با شما با موفقیت ثبت شده است.
      انتشار اپلیکیشن بلبل‌زبان را زودتر از بقیه به شما اطلاع خواهیم داد.
    </Typography>
    {/* </Grid> */}
  </div>
);

SubscriptionMessageBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.common.darkBackground,
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
  text: {
    marginLeft: 15,
  },
});

export default withStyles(styles, { withTheme: true })(SubscriptionMessageBar);
