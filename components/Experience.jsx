import React, { PropTypes } from 'react';
import { Link } from 'react-router';
var FontAwesome = require('react-fontawesome');

const propTypes = {
  children: PropTypes.element,
};

function Experience({ children }) {
  return (
    <div>
      <div>
        <Link to="/web/">Home<FontAwesome
          name='arrow-left'
          size='3x'
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          className="icons"/>
        </Link>
      </div>
      <div className="container">
        <a href="https://github.com/vogtn/web">
          <div id="boxOne" className="boxExperience fade-in one">
            <img src="./img/reactwebsite.png"></img>
          </div>
        </a>
      </div>
      <br />
      <div className="box-description">FreeCodeCamp</div>
      <p>CodeCampDescription here</p>
      <div className="container">
        <a href="https://github.com/vogtn/web">
          <div id="boxOne" className="boxExperience fade-in two">
            <img src="./img/reactwebsite.png"></img>
          </div>
        </a>
      </div>
      <div className="box-description">Query.me</div>
      <p>Query.me description here</p>
    </div>
  );
}

Experience.propTypes = propTypes;

export default Experience;
