import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to='/'>You can go home, maybe?</Link>
    </div>
  );
}

export default NotFound;
