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
        Please see the <a href={repoReadmeLink}>repo readme</a> for
        instructions on how to use this boilerplate
        to deploy your own single page app using GitHub Pages.
      </p>
    </div>
  );
}

export default Home;
