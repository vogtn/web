import React from 'react';
import { Link } from 'react-router';

function Home() {
  const reactLink = 'https://github.com/facebook/react';
  const reactRouterLink = 'https://github.com/reactjs/react-router';
  const ghPagesLink = 'https://pages.github.com/';
  const repoReadmeLink = 'https://github.com/rafrex/spa-github-pages#readme';

  return (
    <div>
      <div><Link to="/web/example">Example page</Link></div>
      <p>
        Welcome to my website built with react, react-router, explore my projects or social media links!
      </p>
    </div>
  );
}

export default Home;
