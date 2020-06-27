import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Card, CardContent, CardMedia, CardHeader, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    maxWidth: 600,
    margin: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    color: theme.palette.primary.main,
  },
}));

const Introduction = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Card className={classes.card}>
        <CardHeader title="درباره بلبل‌زبان" />
        <CardMedia
          className={classes.media}
          image="https://miro.medium.com/max/875/1*eXldw_yG5U_1MBQnYl8IqQ.jpeg"
          title="Paella dish"
        />
        <CardContent>
          <Typography>
            بلبل‌زبان یک ربات هوشمند سُراینده‌ی شعر است، که با کمک هوش مصنوعی، اشعاری با وزن و
            عبارات دلخواه شما می‌سُراید. بلبل‌زبان شعر گفتن را از روی آثار کهن شعر فارسی یاد
            گرفته‌است و می‌تواند سبک و وزن شعرای بزرگ را تقلید کند.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Introduction;
