/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useReducer, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  Button,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
} from '@material-ui/core';
import { IMAGES_BASE_PATH } from '@app-settings';
import quoteInitialState from './initial-state';
import reduder, { GENERATE_FULLFILLED } from './reducer';
import generateRandomImageRequest from './api/generate-random-image-request';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: 20,
    width: '90%',
    minWidth: 275,
    maxWidth: 500,
    // [theme.breakpoints.down('sm')]: {
    //   width: '90%',
    // },
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Quote = () => {
  // quoteInitialState.outputImageAddress = '/share/2020216/toewof3k.24x.jpg';
  const [state, dispatch] = useReducer(reduder, quoteInitialState);
  const [isLoading, setIsLoading] = useState(false);

  const generateQuote = async () => {
    setIsLoading(true);

    const data = await generateRandomImageRequest();

    dispatch({
      type: GENERATE_FULLFILLED,
      payload: {
        input: data.input,
        modelName: data.modelName,
        output: data.output,
        outputImageAddress: data.outputImageAddress,
        responseTime: data.responseTime,
        error: data.statusCode === 200 ? null : { code: data.statusCode, message: data.error },
      },
    });

    setIsLoading(false);
  };

  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Card className={classes.card}>
        {!state.outputImageAddress && <CardHeader title="سلام" />}
        {state.outputImageAddress && (
          <CardMedia
            className={classes.media}
            image={`${IMAGES_BASE_PATH}${state.outputImageAddress}`}
            title={state.text}
          />
        )}
        <CardContent>
          {!state.outputImageAddress && (
            <Typography>
              نام من بلبل‌زبان است. من با کمک هوش مصنوعی ابیاتی الهام بخش و موزون می‌سرایم. دیوان
              شعر من پایانی ندارد.
            </Typography>
          )}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={generateQuote}
            disabled={isLoading}
          >
            بسرای
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

Quote.defaultProps = {};
Quote.propTypes = {};

export default Quote;
