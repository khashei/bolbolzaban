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
  hiddenInput: {
    opacity: 0,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: -2,
  },
}));

const TextCard = ({ lines }) => {
  const copyText = () => {
    copyToClipboard(`${lines.join('\n')}`);
  };

  // eslint-disable-next-line no-console
  console.log({ lines });

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography
          variant="body1"
          color="primary"
          className={classes.resultText}
          style={{ whiteSpace: 'pre-line' }}
        >
          <strong>{lines}</strong>
          {lines}
        </Typography>
        {/* {lines?.map((line) => (
          <Typography
            variant="body1"
            color="primary"
            className={classes.resultText}
            style={{ whiteSpace: 'pre-line' }}
          >
            {line}
          </Typography>
        ))} */}
      </CardContent>
      <CardActions className={classes.actions}>
        <IconButton className={classes.copier} onClick={copyText}>
          <Typography>کپی</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

TextCard.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

TextCard.defaultProps = {};

export default TextCard;
