import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, List, Link, ListItem, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    maxWidth: 600,
    margin: 20,
  },
  farsiLink: {
    textAlign: 'right',
  },
  englishLink: {
    textAlign: 'left',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    color: theme.palette.primary.main,
  },
}));

const LinkItem = ({ url, text, className }) => {
  return (
    <ListItem className={className}>
      <Link href={url} rel="noopener" target="_blank">
        {text}
      </Link>
    </ListItem>
  );
};

LinkItem.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.object.isRequired,
};

const Links = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5">پیوندها</Typography>
          <Grid container>
            <List>
              <LinkItem
                url="https://vrgl.ir/SR9Qb"
                text="بلبل زبان - ربات هوشمند سُراینده شعر"
                className={classes.farsiLink}
              />
            </List>
          </Grid>
          <Typography variant="h5">اطلاعات فنی</Typography>
          <Grid container align-items="flex-end">
            <List>
              <LinkItem
                url="https://medium.com/@khashei/writing-persian-poetry-with-gpt-2-0-71b7197317ea"
                text="Writing Persian Poetry with GPT-2.0"
                className={classes.englishLink}
              />
              <LinkItem
                url="https://medium.com/@khashei/a-not-so-dangerous-ai-in-the-persian-language-39172a641c84"
                text="A Not-so-Dangerous AI in the Persian Language"
                className={classes.englishLink}
              />
              <LinkItem
                url="https://medium.com/@khashei/bolbol-zaban-writing-persian-poetry-with-ai-305f2c96c77"
                text="Bolbol-Zaban — Writing Persian Poetry with AI:"
                className={classes.englishLink}
              />
              <LinkItem
                url="https://medium.com/@khashei/trying-rnn-based-character-models-on-persian-poetry-d0ecc7c014d8"
                text="Trying RNN based character models on Persian poetry"
                className={classes.englishLink}
              />
            </List>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Links;
