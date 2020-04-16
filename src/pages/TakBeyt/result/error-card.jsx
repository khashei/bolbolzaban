import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, CardContent } from '@material-ui/core/';
import withStyles from '@material-ui/core/styles/withStyles';

class ErrorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { statusCode, error, classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          {(statusCode === 400) ? (
            <Typography>{error}</Typography>
          ) : (
            <Fragment>
              <Typography>یکی فنی اشکال آمد به پیش</Typography>
              <Typography>دلم شد ز ایجاد آن ریش ریش</Typography>
            </Fragment>
          )}
        </CardContent>
      </Card>
    );
  }
}

ErrorCard.propTypes = {
  classes: PropTypes.object.isRequired,
  statusCode: PropTypes.number,
  error: PropTypes.string,
};

ErrorCard.defaultProps = {
  statusCode: 500,
  error: '',
};

const styles = theme => ({
  card: {
    minWidth: 275,
    margin: 20,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

export default withStyles(styles, { withTheme: true })(ErrorCard);
