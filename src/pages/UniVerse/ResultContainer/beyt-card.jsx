import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, CardContent, CardActions, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import FilterNone from '@material-ui/icons/FilterNone';
// import ShareIcon from '@material-ui/icons/Share';
// import IconElement from '../../../shared-blocks/icons';

const useStyles = makeStyles(
  theme => ({
    card: {
      minWidth: 275,
      margin: 20,
    },
    button: {
      margin: theme.spacing.unit,
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
  })
);

const BeytCard = ({firstMesra, secondMesra}) => {
  console.log("BeytCard", {firstMesra, secondMesra});
  // this.text = React.createRef();
  const copyText = () => {
    //CopyToClipboardAPICALL(`${firstline}     ${secondline}`);
  };

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography variant="body1" color="primary" className={classes.resultText}>{firstMesra}</Typography>
        <Typography variant="body1" color="primary" className={classes.resultText}>{secondMesra}</Typography>
        {/* <input
            contentEditable
            // readOnly
            type="input"
            ref={this.text}
            defaultValue={`${firstline}     ${secondline}`}
            className={classes.hiddenInput}
          /> */}
      </CardContent>
      <CardActions className={classes.actions}>
        <IconButton
          className={classes.copier}
          onClick={copyText}
        >
          <Typography>
            کپی
          </Typography>

          {/* <FilterNone className={classes.icon} /> */}
        </IconButton>

        {/* {navigator.share &&
          <IconButton
            className={classes.copier}
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
}

BeytCard.propTypes = {
  firstMesra: PropTypes.string.isRequired,
  secondMesra: PropTypes.string.isRequired,
};

BeytCard.defaultProps = {
};

export default BeytCard;
