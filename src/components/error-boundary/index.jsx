/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // console.log('Error boundry:', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <h1 style={{ margin: '20vh 0', textAlign: 'center' }}>
          {' '}
          یکی فنی اشکال آمد به پیش <br />
          دلم شد ز ایجاد آن ریش ریش
        </h1>
      );
    }

    const { children } = this.props;
    return children;
  }
}
export default ErrorBoundary;
