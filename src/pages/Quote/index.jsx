/* eslint-disable import/no-unresolved */
import React, { useReducer, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  Button,
  CardContent,
  CardMedia,
  Link,
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
import * as gtag from '@utils/gtag';
import { IMAGES_BASE_PATH } from '@app-settings';
import defaultTheme from '@app/theme';
import InstagramIcon from '@components/icons/instagram-icon';
// import SimpleTelegramIcon from '@components/icons/telegram-icon';
import LogoImage from '@resources/logo.svg';
import quoteInitialState from './initial-state';
import reduder, { GENERATE_FULLFILLED } from './reducer';
import generateRandomImageRequest from './api/generate-random-image-request';

const SENT_TO = 'sent_to';
const QUOTE_GENERATED = 'generated';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(4),
    width: '90%',
    minWidth: 275,
    maxWidth: 500,
  },
  shareIcon: {
    width: 48,
    '&:hover': {
      opacity: 0.75,
    },
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
  button: {
    marginTop: theme.spacing(2),
    minWidth: '100%',
  },
  inlineButton: {
    marginleft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const Quote = () => {
  const [state, dispatch] = useReducer(reduder, quoteInitialState);
  const [isLoading, setIsLoading] = useState(false);

  const postAnalyticEvent = (action, label) => () => {
    if (action === SENT_TO) {
      gtag.event({
        action: `sent_to_${label}`,
        category: 'quote',
        label: `${state.modelName}: ${state.output.join(' - ')}`,
      });
    } else if (action === QUOTE_GENERATED) {
      gtag.event({
        action,
        category: 'quote',
        label: `${state.modelName}: ${state.output.join(' - ')}`,
      });
    }
  };

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

  useEffect(() => {
    postAnalyticEvent(QUOTE_GENERATED, '');
  }, [state]);

  const classes = useStyles();
  const imageUrl = state.outputImageAddress
    ? `${IMAGES_BASE_PATH}${state.outputImageAddress.trim()}`
    : '';
  return (
    <Grid container justify="center" direction="column" alignItems="center">
      <Card className={classes.card}>
        {imageUrl && <CardMedia className={classes.media} image={imageUrl} title={state.text} />}
        <CardContent>
          {!state.outputImageAddress && <CardMedia className={classes.media} image={LogoImage} />}
          {!state.outputImageAddress && (
            <Typography>
              نام من بلبل‌زبان است. من با کمک هوش مصنوعی ابیاتی الهام بخش و موزون می‌سُرایم، تا ذهن
              خواننده‌ی با ذوق را به بازی بگیرم.
            </Typography>
          )}
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            color="primary"
            onClick={generateQuote}
            disabled={isLoading}
          >
            بسُرای
          </Button>
        </CardContent>
        {state.outputImageAddress && (
          <CardActions className={classes.actions}>
            <Grid container justify="center" alignItems="center" direction="column">
              <Grid Item>
                <Typography variant="h5">ارسال به:</Typography>
              </Grid>
              <Grid Item>
                <WhatsappShareButton
                  beforeOnClick={postAnalyticEvent(SENT_TO, 'Whatsapp')}
                  url={imageUrl}
                  title={`${state.output.join('\n')}\nbolbolzaban.com`}
                  separator=" :: "
                >
                  <WhatsappIcon
                    className={classes.shareIcon}
                    iconFillColor={defaultTheme.palette.primary.main}
                    bgStyle={{
                      fill: 'white',
                    }}
                  />
                </WhatsappShareButton>
                <TwitterShareButton
                  beforeOnClick={postAnalyticEvent(SENT_TO, 'Twitter')}
                  url={imageUrl}
                  title={`${state.output.join('\n')}\n\nbolbolzaban.com\n\n`}
                  via="bolbol_zaban"
                  hashtags={['بلبل_زبان', 'شعر']}
                >
                  <TwitterIcon
                    iconFillColor={defaultTheme.palette.primary.main}
                    bgStyle={{
                      fill: 'white',
                    }}
                  />
                </TwitterShareButton>
                <FacebookShareButton
                  beforeOnClick={postAnalyticEvent(SENT_TO, 'Facebook')}
                  url={imageUrl}
                  quote={`${state.output.join(' - ')}`}
                  hashtag="#بلبل_زبان"
                >
                  <FacebookIcon
                    iconFillColor={defaultTheme.palette.primary.main}
                    bgStyle={{
                      fill: 'white',
                    }}
                  />
                </FacebookShareButton>
                <TelegramShareButton
                  beforeOnClick={postAnalyticEvent(SENT_TO, 'Telegram')}
                  url={imageUrl}
                  title={`${state.output
                    .join('\n')
                    .trim()}\n#بلبل_زبان\nbolbolzaban.com - @bolbol_zaban`}
                >
                  <TelegramIcon
                    className={classes.shareIcon}
                    iconFillColor={defaultTheme.palette.primary.main}
                    bgStyle={{
                      fill: 'white',
                    }}
                  />
                </TelegramShareButton>
              </Grid>
            </Grid>
          </CardActions>
        )}
      </Card>
      <Grid item style={{ marginTop: 20, marginBottom: 100 }}>
        <Typography variant="body1">
          بلبل‌زبان را در
          <Link href="https://www.instagram.com/bolbolzaban" color="inherit">
            <Button>
              <InstagramIcon />
              <Typography style={{ marginRight: 5 }}>اینستاگرام</Typography>
            </Button>
          </Link>
          {/* و
          <Link href="https://t.me/bolbol_zaban">
            <Button>
              <SimpleTelegramIcon />
              <Typography style={{ marginRight: 5 }}>تلگرام</Typography>
            </Button>
          </Link> */}
          دنبال کنید.
        </Typography>
      </Grid>
    </Grid>
  );
};

Quote.defaultProps = {};
Quote.propTypes = {};

export default Quote;
