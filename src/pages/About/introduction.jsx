import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Link } from 'react-router-dom';

import {
  Button,
  Snackbar,
  Typography,
  SnackbarContent,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  snackBar: {
    backgroundColor: theme.palette.common.textBackgroundColor,
  },
  button: {
    color: theme.palette.primary.main,
  },
}));

const Introduction = () => {
  const classes = useStyles();
  return (
    <ClickAwayListener onClickAway={this.handleClose}>
      <Snackbar open={this.state.isOpen}>
        <SnackbarContent
          aria-describedby="intro-snackbar"
          className={classes.snackBar}
          message={
            <span id="intro-snackbar" className={classes.message}>
              <Typography>
                بلبل‌زبان یک ربات هوشمند سُراینده‌ی شعر است، که با کمک
                هوش مصنوعی، اشعاری با وزن و عبارات دلخواه شما می‌سُراید.
                بلبل‌زبان شعر گفتن را از روی آثار کهن شعر فارسی یاد
                گرفته‌است و می‌تواند سبک و وزن شعرای بزرگ را تقلید کند.
                </Typography>,
              </span>
          }
          action={[
            <Button
              onClick={this.handleClose}
              className={classes.button}
              component={Link}
              key="help"
              to="/help"
            >
              توضیحات بیشتر
              </Button>,
            <Button
              onClick={this.handleClose}
              className={classes.button}
              key="close"
            >
              فهمیدم
              </Button>,
          ]}
        />
      </Snackbar>
    </ClickAwayListener>
  );
}

export default Introduction;
