import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import FirstSlide from './01-slide';
import SecondSlide from './02-slide';
import ThirdSlide from './03-slide';
import ForthSlide from './04-slide';
import FifthSlide from './05-slide';
import SixthSlide from './06-slide';
import SeventhSlide from './07-slide';


const BolbolzabanHelpContent = (props) => {
  const { classes, activeStep, handleStepChange, handleSwitching } = props;

  return (
    <SwipeableViews
      axis="x-reverse"
      index={activeStep}
      onChangeIndex={handleStepChange}
      onSwitching={handleSwitching}
      enableMouseEvents
      className={classes.swipeableViews}
      slideStyle={{ padding: '0 5px' }}
    >
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
      <ForthSlide />
      <FifthSlide />
      <SixthSlide />
      <SeventhSlide />
    </SwipeableViews>
  );
};


BolbolzabanHelpContent.propTypes = {
  classes: PropTypes.object.isRequired,
  activeStep: PropTypes.number.isRequired,
  handleStepChange: PropTypes.func.isRequired,
  handleSwitching: PropTypes.func.isRequired,
};

const styles = theme => ({
  swipeableViews: {
    // padding: '0 15px',
    backgroundColor: theme.palette.common.lightBackground,
  },
});

export default withStyles(styles, { withTheme: true })(BolbolzabanHelpContent);
