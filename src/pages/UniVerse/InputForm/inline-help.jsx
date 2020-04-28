import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, CardContent, CardActions, Button, Popper } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  (theme) => ({
    card: {
      minWidth: 200,
    },
    button: {
      margin: theme.spacing.unit,
    },
    popper: {
      zIndex: 1,
      '& $arrow': {
        top: 0,
        left: 0,
        marginTop: '-0.9em',
        width: '3em',
        height: '1em',
        '&::before': {
          borderWidth: '0 1em 1em 1em',
          borderColor: `transparent transparent ${theme.palette.common.white} transparent`,
        },
      },
    },
    arrow: {
      fontSize: 7,
      width: '3em',
      height: '3em',
      '&::before': {
        content: '""',
        margin: 'auto',
        display: 'block',
        width: 0,
        height: 0,
        borderStyle: 'solid',
      },
    },
  })
);

const InlineHelp = (anchor, onRandomSampleClick) => {
  const [arrowRef, setArrowRef] = useState();
  const classes = useStyles();
  return (
    <Popper
      placement="bottom"
      disablePortal
      open
      anchorEl={anchor}
      className={classes.popper}
      modifiers={{
        flip: {
          enabled: true,
        },
        preventOverflow: {
          enabled: true,
          boundariesElement: 'window',
        },
        arrow: {
          enabled: true,
          element: arrowRef,
        },
      }}
    >
      <span className={classes.arrow} ref={setArrowRef.bind(this)} />
      <Card className={classes.card}>
        <CardContent>
          <Typography>اگر خواهی بگویی شعر نابی</Typography>
          <Typography>بپرس از من بگویم تا جوابی</Typography>
          <Typography>بده الگـوی بیـتی را به بلبـل</Typography>
          <Typography>همانند مثال ای دسته‌ی گل</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            className={classes.button}
            onClick={onRandomSampleClick}>تولید الگوی نمونه</Button>
        </CardActions>
      </Card>
    </Popper>
  );
}

InlineHelp.propTypes = {
  onRandomSampleClick: PropTypes.func.isRequired,
  anchor: PropTypes.object,
};

InlineHelp.defaultProps = {
  anchor: null,
};

export default InlineHelp;
