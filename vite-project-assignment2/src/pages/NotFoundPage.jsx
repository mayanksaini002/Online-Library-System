import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="notfound-page">
      <h1>404 - Page Not Found</h1>
      <p>Oops, looks like you're lost!</p>
      <Link to="/" className="home-link">Back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
