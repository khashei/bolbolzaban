// prettier disable due to error in handling <> </> tag: https://github.com/prettier/prettier/issues/5814
/* eslint-disable prettier/prettier */

import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, CardContent } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    margin: 20,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const ErrorCard = ({ code, message }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        {code === 400 ? (
          <Typography>{message}</Typography>
        ) : (
            <>
              <Typography>یکی فنی اشکال آمد به پیش</Typography>
              <Typography>دلم شد ز ایجاد آن ریش ریش</Typography>
            </>
          )}
      </CardContent>
    </Card>
  );
};

ErrorCard.propTypes = {
  code: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

ErrorCard.defaultProps = {};

export default ErrorCard;
