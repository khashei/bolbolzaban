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

const TextCard = ({ lines, onGenerateMore }) => {
  const formatLinesForDisplay = (allLines) =>
    allLines.map((line) =>
      line
        .replace(/\[EOS\]/g, '\n')
        .replace(/\[SEP\]/g, '\nپایان')
        .replace(/\[BOM\]/g, '\n(مصرع)')
        .trim()
    );

  const formatLinesForCopy = (allLines) =>
    allLines.map((line) =>
      line
        .replace(/\[EOS\]/g, '\n')
        .replace(/\[SEP\]/g, '\nپایان')
        .replace(/\[BOM\]\s+/g, '\n')
        .replace(/<s>/g, '')
        .trim()
    );

  const copyText = () => {
    copyToClipboard(`${formatLinesForCopy(lines).join('\n')}`);
  };

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        {formatLinesForDisplay(lines).map((line, index) => {
          const parts = line.split('<s>');
          return (
            <Typography
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              variant="body1"
              color="primary"
              className={classes.resultText}
              style={{ whiteSpace: 'pre-line' }}
            >
              <strong>{parts[0]}</strong>
              {parts[1]}
            </Typography>
          );
        })}
      </CardContent>
      <CardActions className={classes.actions}>
        <IconButton onClick={onGenerateMore}>
          <Typography>ادامه بده</Typography>
        </IconButton>
        <IconButton onClick={copyText}>
          <Typography>کپی</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

TextCard.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGenerateMore: PropTypes.func.isRequired,
};

TextCard.defaultProps = {};

export default TextCard;
