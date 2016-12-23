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

  function togithubLink() {
    window.open(githubLink)
  }
  function totwitterLink() {
    window.open(twitterLink)
  }
  function tocodepenLink() {
    window.open(codepenLink)
  }
  function tomediumLink() {
    window.open(mediumLink)
  }
  function tolinkedLink() {
    window.open(linkedLink)
  }

  return (
    <div>
      <h1>Nicolas Vogt - Web Developer</h1>
        <FontAwesome
          name='github'
          size='4x'
          onClick={togithubLink()}
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          className="icons"
        />
        <FontAwesome
          name='twitter'
          size='4x'
          onClick={totwitterLink()}
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          className="icons"
        />
        <FontAwesome
          name='codepen'
          size='4x'
          onClick={tocodepenLink()}
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          className="icons"
        />
        <FontAwesome
          name='medium'
          size='4x'
          onClick={tomediumLink()}
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          className="icons"
        />
        <FontAwesome
          name='linkedin-square'
          size='4x'
          onClick={tolinkedLink()}
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          className="icons"
        />
      {children}
      <div style={{ color: '#A0A0A0', fontSize: '14px', marginTop: '50px' }}>
      </div>
    </div>
  );
}

App.propTypes = propTypes;

export default App;
