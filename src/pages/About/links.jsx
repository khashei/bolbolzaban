import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  Typography,
  List,
  Link,
  ListItem,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
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

export default function Links() {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Card className={classes.card} >
        <CardHeader
          title="پیوند‌ها"
        //subheader="ربات هوشمند سُراینده‌ی شعر"
        />
        {/* <CardMedia
        className={classes.media}
        image="https://miro.medium.com/max/875/1*eXldw_yG5U_1MBQnYl8IqQ.jpeg"
        title="Paella dish"
      /> */}
        <CardContent>
          <List className={classes.root}>
            <ListItem justify='left'>
              <Link href="https://medium.com/@khashei/writing-persian-poetry-with-gpt-2-0-71b7197317ea">Writing Persian Poetry with GPT-2.0</Link>
            </ListItem>
            <ListItem justify='right'>
              <Link href="">Trying RNN based character models on Persian poetry</Link>
            </ListItem>
            <ListItem>
              <Link>A Not-so-Dangerous AI in the Persian Language</Link>
            </ListItem>
            <ListItem>
              <Link >Detecting Persian poem metre (وزن شعر) using a sequence to sequence deep learning model</Link>
            </ListItem>
            <ListItem>
              <Link >بلبل زبان - ربات هوشمند سُراینده شعر</Link>
            </ListItem>
            <ListItem>
              <Link>بلبل زبان - ربات هوشمند سُراینده شعر</Link>
            </ListItem>
            <ListItem>
              <Link>بلبل زبان - ربات هوشمند سُراینده شعر</Link>
            </ListItem>

          </List>
        </CardContent>
        <CardActions>
          <Button className={classes.button} component={Link} key="help" to="/help">
            توضیحات بیشتر
        </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
