import React from 'react';
import { Grid, Button, Typography, ButtonGroup } from '@material-ui/core';

const Footer = () => {
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
          <Button target="_blank" href="https://www.instagram.com/bolbolzaban">
            اینستاگرام
          </Button>
          <Button target="_blank" href="https://www.facebook.com/bolbolzaban">
            فیس‌بوک
          </Button>
          <Button target="_blank" href="https://twitter.com/bolbol_zaban">
            توییتر
          </Button>
          <Button target="_blank" href="https://t.me/bolbol_zaban">
            تلگرام
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default Footer;
