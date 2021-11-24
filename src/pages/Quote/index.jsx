/* eslint-disable import/no-unresolved */
import React, { useReducer, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  Button,
  TextField,
  CardContent,
  CardMedia,
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
import { sendNotificationRequest } from '@app/api';
import LogoImage from '@resources/logo.svg';
import Footer from '@components/footer';
import quoteInitialState from './initial-state';
import reduder, { GENERATE_FULLFILLED, UPDATE_INPUT } from './reducer';
import generateRequest from './api/generate-request';

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
  logoMedia: {
    height: 0,
    paddingTop: '100%',
    backgroundSize: '75%',
  },
  button: {
    marginTop: theme.spacing(2),
    minWidth: '100%',
  },
  textField: {
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

  const postAnalyticEvent = (action, label) => {
    if (action === SENT_TO) {
      gtag.event({
        action: `sent_to_${label}`,
        category: 'quote',
        label: `${state.modelName}/${state.outputImageAddress}: ${state.output.join(' - ')}`,
      });
    } else if (action === QUOTE_GENERATED) {
      gtag.event({
        action,
        category: 'quote',
        label: `${state.modelName}/${state.outputImageAddress}: ${state.output.join(' - ')}`,
      });
    }
  };

  const beforeSendingTo = (target) => () => {
    postAnalyticEvent(SENT_TO, target);

    sendNotificationRequest({
      type: 'usage',
      text: `${IMAGES_BASE_PATH}${state.outputImageAddress.trim()}\n${state.output
        .join('\n')
        .trim()}\n${state.modelName}\n#bolbolzaban #sent_to_${target}`,
    });
  };

  const generateQuote = async () => {
    setIsLoading(true);

    const data = await generateRequest(state.input);

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
    if (state.outputImageAddress) postAnalyticEvent(QUOTE_GENERATED, 'test');
  }, [state.outputImageAddress]);

  const classes = useStyles();
  const imageUrl = state.outputImageAddress
    ? `${IMAGES_BASE_PATH}${state.outputImageAddress.trim()}`
    : '';
  const typeTag = state.output.length === 1 ? 'تک_مصرع' : 'تک_بیت';

  const handleInputChange = (event) => {
    dispatch({
      type: UPDATE_INPUT,
      payload: {
        input: event.target.value,
      },
    });
  };

  return (
    <Grid container justify="center" direction="column" alignItems="center">
      <Card className={classes.card}>
        {imageUrl && <CardMedia className={classes.media} image={imageUrl} title={state.text} />}
        <CardContent>
          {!state.outputImageAddress && (
            <CardMedia className={classes.logoMedia} image={LogoImage} />
          )}
          {!state.outputImageAddress && (
            <Typography>
              نام من بلبل‌زبان است. من با کمک هوش مصنوعی ابیاتی الهام بخش و موزون می‌سُرایم، تا ذهن
              خواننده‌ی با ذوق را به بازی بگیرم.
            </Typography>
          )}
          <TextField
            className={classes.textField}
            placeholder="کلمات ابتدای شعر"
            variant="outlined"
            inputProps={{
              maxLength: 40,
            }}
            value={state.input}
            onChange={handleInputChange}
          />
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            color="primary"
            onClick={generateQuote}
            disabled={isLoading}
          >
            {isLoading ? 'گر صبر کنی ...' : 'بسُرای'}
          </Button>
        </CardContent>
        {state.outputImageAddress && (
          <CardActions className={classes.actions}>
            <Grid container justify="center" alignItems="center" direction="column">
              <Grid>
                <Typography variant="h5">ارسال به:</Typography>
              </Grid>
              <Grid>
                <WhatsappShareButton
                  beforeOnClick={beforeSendingTo('Whatsapp')}
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
                  beforeOnClick={beforeSendingTo('Twitter')}
                  url={`${imageUrl}\n\n`}
                  title={`${state.output.join(
                    '\n'
                  )}\n#بلبل_زبان #${typeTag} #شعر_فارسى #هوش_مصنوعی \n\n`}
                  via="bolbol_zaban"
                >
                  <TwitterIcon
                    iconFillColor={defaultTheme.palette.primary.main}
                    bgStyle={{
                      fill: 'white',
                    }}
                  />
                </TwitterShareButton>
                <FacebookShareButton
                  beforeOnClick={beforeSendingTo('Facebook')}
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
                  beforeOnClick={beforeSendingTo('Telegram')}
                  url={imageUrl}
                  title={`${state.output
                    .join('\n')
                    .trim()}\n#بلبل_زبان #${typeTag}\n@bolbol_zaban - bolbolzaban.com`}
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
      <Footer />
    </Grid>
  );
};

Quote.defaultProps = {};
Quote.propTypes = {};

export default Quote;
