import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
  Button,
  IconButton,
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
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };
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
            شما دارد.
          </Typography>
        </CardContent>
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              اگر از استفاده از این ابزار لذت بردید برای بلبل زبان یک قهوه بخرید.
            </Typography>
          </CardContent>
        </Collapse>
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
          <IconButton
            className={`${classes.expand} ${isExpanded ? classes.expandOpen : ''}`}
            onClick={handleExpandClick}
            aria-expanded={isExpanded}
            aria-label="توضیحات بیشتر"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        {/* <CardActions>
          {!isExpanded && (
            <Button className={classes.actionButton} onClick={expandCard}>
              توضیحات بیشتر
            </Button>
          )}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            startIcon={<LocalCafeIcon />}
          >
            برای من یک قهوه بخر
          </Button>
        </CardActions> */}
      </Card>
    </Grid>
  );
};

export default SupportUs;
