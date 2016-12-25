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
      <div className="container">
        <Link to="/web/projects">
          <div id="boxOne" className="box fade-in one">
          </div>
        </Link>
      </div>
      <div className="box-description">Projects</div>
      <div className="container">
        <Link to="/web/example">
          <div id="boxTwo" className="box fade-in two">
          </div>
        </Link>
      </div>
      <div className="box-description">Experience</div>
      <div className="container">
        <Link to="/web/example">
          <div id="boxThree" className="box fade-in three">
          </div>
        </Link>
      </div>
      <div className="box-description">Resume/Contact</div>
    </div>
  );
}

export default Home;
