/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, CardContent, CardActions, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import copyToClipboard from '@utils/copy-to-clipboard';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    margin: 20,
  },
  button: {
    margin: theme.spacing(1),
  },
  content: {
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 0,
    paddingLeft: 15,
  },
  actions: {
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  // icon: {
  //   width: 10,
  //   height: 10,
  // },
  hiddenInput: {
    opacity: 0,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: -2,
  },
}));

const BeytCard = ({ firstMesra, secondMesra }) => {
  const copyText = () => {
    copyToClipboard(`${firstMesra}     ${secondMesra}`);
  };

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography variant="body1" color="primary" className={classes.resultText}>
          {firstMesra}
        </Typography>
        <Typography variant="body1" color="primary" className={classes.resultText}>
          {secondMesra}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <IconButton onClick={copyText}>
          <Typography>کپی</Typography>
        </IconButton>

        {/* {navigator.share &&
          <IconButton
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Web Fundamentals',
                  text: 'Check out Web Fundamentals — it rocks!',
                  url: 'https://developers.google.com/web',
                })
                  .then(() => console.log('Successful share'))
                  .catch(error => console.log('Error sharing', error));
              }
          }}
          >
            <ShareIcon className={classes.icon} />
          </IconButton>
        } */}
      </CardActions>
    </Card>
  );
};

BeytCard.propTypes = {
  firstMesra: PropTypes.string.isRequired,
  secondMesra: PropTypes.string.isRequired,
};

BeytCard.defaultProps = {};

export default BeytCard;
