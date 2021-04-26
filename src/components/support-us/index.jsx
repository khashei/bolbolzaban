import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  button: {
    direction: 'ltr',
  },
  actionButton: {
    color: theme.palette.primary.main,
  },
}));

const SupportUs = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Card className={classes.card}>
        <CardHeader title="از بلبل‌زبان حمایت کنید" />
        {/* <CardMedia
        className={classes.media}
        image="https://miro.medium.com/max/875/1*eXldw_yG5U_1MBQnYl8IqQ.jpeg"
        title="Paella dish"
      /> */}
        <CardContent>
          <Typography>
            بلبل زبان تازه متولد شده است و برای سرپا ماندن و یادگیری بهتر زبان فارسی نیاز به حمایت
            شما دارد. بلبل‌زبان را به دوستان خود معرفی کنید.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            target="_blank"
            href="https://www.buymeacoffee.com/bolbolzaban"
            className={classes.button}
            variant="contained"
            color="primary"
            startIcon={<LocalCafeIcon />}
          >
            برای بلبل زبان یک قهوه بخرید
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SupportUs;
