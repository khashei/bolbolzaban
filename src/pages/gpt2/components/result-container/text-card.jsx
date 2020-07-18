/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, Grid, CardContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import copyToClipboard from '@utils/copy-to-clipboard';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    margin: 20,
    marginTop: 0,
    marginBottom: 0,
  },
  button: {
    margin: 20,
    marginTop: theme.spacing(0.75),
    float: 'left',
    color: theme.palette.primary.main,
  },
  content: {
    padding: 15,
    '&:last-child': {
      paddingBottom: 20,
    },
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
    const formattedlines = lines
      .map((line) =>
        line
          .trim()
          .replace(/<s>/g, '')
          .replace(/\[LAT\]|\[KRK\]/g, '[فُلان]')
          .replace(/\[EOS\]\s*/g, '\n')
          .replace(/\[SEP\]\s*/g, '\n')
          .replace(/\[BOM\]\s*/g, '\n')
          .trim()
      )
      .join('\n');

    copyToClipboard(formattedlines.concat('\n\nبلبل‌زبان\nwww.bolbolzaban.com'));
  };

  const formatLinesForDisplay = (allLines) =>
    allLines.map((line) =>
      line
        .trim()
        .replace(/\[LAT\]|\[KRK\]/g, '[فُلان]')
        .replace(/\[BOM\]/g, '\n(مصرع)')
        .replace(/\[EOS\]/g, '\n')
        .replace(/\[SEP\]/g, '\nپایان')
        .trim()
    );

  const splitInputAndOutputParts = (line) => {
    const parts = line.split('<s>');
    if (parts[1].indexOf('\n') > 0) {
      const lastLineStartIndex = parts[0].lastIndexOf('\n');
      return [parts[0].substring(lastLineStartIndex).trim(), parts[1]];
    }

    return ['', parts[1].trim()];
  };

  const classes = useStyles();
  return (
    <Grid container justify="space-around" spacing={2}>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            {formatLinesForDisplay(lines).map((line, index) => {
              const parts = splitInputAndOutputParts(line);
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
        </Card>
        <Button onClick={copyText} variant="outlined" className={classes.button} size="small">
          کپی متن کامل در کلیپ‌بورد
        </Button>
      </Grid>
    </Grid>
  );
};

TextCard.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

TextCard.defaultProps = {};

export default TextCard;
