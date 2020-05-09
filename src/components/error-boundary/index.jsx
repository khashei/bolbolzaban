import React from 'react';
import { darkBackground } from '@app/theme';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error boundry:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 style={{ margin: '20vh 0', textAlign: 'center' }}> یکی فنی اشکال آمد به پیش <br />دلم شد ز ایجاد آن ریش ریش</h1 >;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
