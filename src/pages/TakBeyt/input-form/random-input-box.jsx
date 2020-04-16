import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, CardContent, CardActions, Button, Popper } from '@material-ui/core/';
import withStyles from '@material-ui/core/styles/withStyles';

class RandomInputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowRef: null,
    };
  }

  setArrowRef = (node) => {
    this.setState({
      arrowRef: node,
    });
  };

  render() {
    const { classes, anchor } = this.props;
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
            element: this.state.arrowRef,
          },
        }}
      >
        <span className={classes.arrow} ref={this.setArrowRef} />
        <Card className={classes.card}>
          <CardContent>
            <Typography>اگر خواهی بگویی شعر نابی</Typography>
            <Typography>بپرس از من بگویم تا جوابی</Typography>
            <Typography>بده الگـوی بیـتی را به بلبـل</Typography>
            <Typography>همانند مثال ای دسته‌ی گل</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" className={classes.button} onClick={this.props.onRandomSampleClick} >تولید الگوی نمونه</Button>
          </CardActions>
        </Card>
      </Popper>
    );
  }
}

RandomInputBox.propTypes = {
  classes: PropTypes.object.isRequired,
  onRandomSampleClick: PropTypes.func.isRequired,
  anchor: PropTypes.object,
};

RandomInputBox.defaultProps = {
  anchor: null,
};

const styles = theme => ({
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
});

export default withStyles(styles, { withTheme: true })(RandomInputBox);
