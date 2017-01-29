import React from 'react';
import { Link } from 'react-router';

function Home() {
  const reactLink = 'https://github.com/facebook/react';
  const reactRouterLink = 'https://github.com/reactjs/react-router';
  const ghPagesLink = 'https://pages.github.com/';
  const repoReadmeLink = 'https://github.com/rafrex/spa-github-pages#readme';

  return (
    <div>
      <p>
        Welcome to my website built with react, react-router, explore my projects or social media links!
      </p>
      <div className="Skills-Desc">Skills:
        <div className="Skills">
          Javascript(ES6 & ES5), HTML5, CSS3, jQuery, Reactjs, Angularjs, Bootstrap, Webpack, NPM, Grunt, Gulp, Mocha, Git, Nodejs, Express, Mongodb
        </div>
      </div>
      <div className="container">
        <Link to="/web/projects">
          <div id="boxOne" className="box fade-in one">
            <img src="./img/projects.png"></img>
          </div>
        </Link>
      </div>
      <div className="box-description">Projects</div>
      <div className="container">
        <Link to="/web/experience">
          <div id="boxTwo" className="box fade-in two">
            <img src="./img/experience.png"></img>
          </div>
        </Link>
      </div>
      <div className="box-description">Experience</div>
      <div className="container">
        <Link to="/web/resume">
          <div id="boxThree" className="box fade-in three">
            <img src="./img/resume.png"></img>
          </div>
        </Link>
      </div>
      <div className="box-description">Resume/Contact</div>
    </div>
  );
}

export default Home;
