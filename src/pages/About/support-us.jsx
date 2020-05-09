import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import {
  Button,
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
} from '@material-ui/core';

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

const SupportUs = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Card className={classes.card}>
        <CardHeader title="حمایت از بلبل‌زبان" />
        {/* <CardMedia
        className={classes.media}
        image="https://miro.medium.com/max/875/1*eXldw_yG5U_1MBQnYl8IqQ.jpeg"
        title="Paella dish"
      /> */}
        <CardContent>
          <Typography>
            بلبل زبان تازه متولد شده است و برای سرپا ماندن و یادگیری بهتر زبان فارسی نیاز به حمایت
            شما دارد. از پروژه بلبل‌زبان حمایت کنید.
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.button} component={Link} key="help" to="/help">
            توضیحات بیشتر
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SupportUs;
