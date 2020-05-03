import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <p>Hello World of React and Webpack!</p>
      <a href="/auth/google">Sign Up/In with Google</a>
      <p>
        <Link to="/login">Navigate to Dynamic Page</Link>
      </p>
    </Layout>
  );
};

export default Home;