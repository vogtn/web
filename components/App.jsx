import React, { PropTypes } from 'react';
import { Link } from 'react-router';
var FontAwesome = require('react-fontawesome');

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

function App({ children, routes }) {

  const githubLink = 'https://github.com/vogtn';
  const twitterLink = 'https://twitter.com/NicVogt';
  const codepenLink = 'http://codepen.io/vogtn/';
  const mediumLink = 'https://medium.com/@nicolasjvogt';
  const linkedLink = 'https://www.linkedin.com/in/vogtn';

  return (
    <div>
      <h1>Nicolas Vogt - Web Developer</h1>
        <a href={githubLink}><FontAwesome
          ariaLabel='github'
          name='github'
          size='4x'
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          className="icons"
        /></a>
      <a href={twitterLink}><FontAwesome
          ariaLabel='twitter'
          name='twitter'
          size='4x'
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          className="icons"
        /></a>
      <a href={codepenLink}><FontAwesome
          ariaLabel='codepen'
          name='codepen'
          size='4x'
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          className="icons"
        /></a>
      <a href={mediumLink}><FontAwesome
          ariaLabel='medium'
          name='medium'
          size='4x'
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          className="icons"
        /></a>
      <a href={linkedLink}><FontAwesome
          ariaLabel='linkedIn'
          name='linkedin-square'
          size='4x'
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          className="icons"
        /></a>
      {children}
      <div style={{ color: '#A0A0A0', fontSize: '14px', marginTop: '50px' }}>
      </div>
      <div className="contactbox">
        <button>Resume</button>
        <div>1-425-829-0163</div><FontAwesome
            name='mobile'
            size='2x'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
        <div>nicolasjvogt@gmail.com</div><FontAwesome
              name='envelope-o'
              size='2x'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
      </div>
    </div>
  );
}

App.propTypes = propTypes;

export default App;
