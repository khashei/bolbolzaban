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
  CardActions,
} from '@material-ui/core';
import {
  TelegramShareButton,
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
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
  },
  shareIcon: {
    width: 32,
    color: 'rgba(0, 0, 0, 0.54)',
    bgStyle: 'fill:#044B9466 opacity: 0.3',
  },
  shareButton: {
    color: 'rgba(0, 0, 0, 0.54)',
    margin: 10,
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
  const imageUrl = state.outputImageAddress
    ? `${IMAGES_BASE_PATH}${state.outputImageAddress.trim()}`
    : '';
  return (
    <Grid container justify="center">
      <Card className={classes.card}>
        {!imageUrl && <CardHeader title="سلام" />}
        {imageUrl && <CardMedia className={classes.media} image={imageUrl} title={state.text} />}
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
        {state.outputImageAddress && (
          <CardActions>
            <TelegramShareButton
              className={classes.shareButton}
              url={imageUrl}
              title={`${state.output.join('\n')}\nbolbolzaban.com\n@bolbol_zaban`}
            >
              <TelegramIcon className={classes.shareIcon} />
            </TelegramShareButton>
            <TwitterShareButton
              className={classes.shareButton}
              url={imageUrl}
              title={`${state.output.join('\n')}\n\nbolbolzaban.com\n\n`}
              via="bolbol_zaban"
              hashtags={['بلبل_زبان', 'شعر']}
            >
              <TwitterIcon className={classes.shareIcon} />
            </TwitterShareButton>
            <FacebookShareButton
              className={classes.shareButton}
              url={imageUrl}
              quote={`${state.output.join(' - ')}`}
              hashtag="#بلبل_زبان"
            >
              <FacebookIcon className={classes.shareIcon} />
            </FacebookShareButton>
            <WhatsappShareButton
              url={imageUrl}
              title={`${state.output.join('\n')}\nbolbolzaban.com`}
              separator=" :: "
              className={classes.shareButton}
            >
              <WhatsappIcon className={classes.shareIcon} />
            </WhatsappShareButton>
          </CardActions>
        )}
      </Card>
    </Grid>
  );
};

Quote.defaultProps = {};
Quote.propTypes = {};

export default Quote;
