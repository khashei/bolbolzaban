import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 30,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
}));

function NotFound() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="h5">یافت می‌نشود گشته‌ایم ما</Typography>
      <Link to="/about">درباره بلبل زبان</Link>
    </Container>
  );
}

export default NotFound;
