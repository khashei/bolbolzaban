/* eslint-disable import/no-unresolved */
import React from 'react';
import { Grid, Button, Typography, ButtonGroup } from '@material-ui/core';
import * as gtag from '@utils/gtag';

const Footer = () => {
  const postAnalyticEvent = (action) => () => {
    gtag.event({
      action: `visit_${action}`,
      category: 'link',
    });
  };

  return (
    <Grid container alignItems="center" direction="column">
      <Typography variant="body1" style={{ marginTop: 20 }}>
        سروده‌های بلبل‌زبان را در شبکه‌های اجتماعی دنبال کنید
      </Typography>
      <Grid item>
        <ButtonGroup
          style={{ direction: 'ltr', marginTop: 5, marginBottom: 100 }}
          variant="text"
          color="primary"
        >
          <Button
            target="_blank"
            href="https://www.instagram.com/bolbolzaban"
            onClick={postAnalyticEvent('Instagram')}
          >
            اینستاگرام
          </Button>
          {/* <Button
            target="_blank"
            href="https://www.facebook.com/bolbolzaban"
            onClick={postAnalyticEvent('Facebook')}
          >
            فیس‌بوک
          </Button> */}
          <Button
            target="_blank"
            href="https://twitter.com/bolbol_zaban"
            onClick={postAnalyticEvent('Twitter')}
          >
            توییتر
          </Button>
          <Button
            target="_blank"
            href="https://t.me/bolbol_zaban"
            onClick={postAnalyticEvent('Telegram')}
          >
            تلگرام
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default Footer;
