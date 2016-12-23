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
        <FontAwesome
          name='github'
          size='4x'
          link={githubLink}
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
        <FontAwesome
          name='twitter'
          size='4x'
          link={twitterLink}
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
        <FontAwesome
          name='codepen'
          size='4x'
          link={codepenLink}
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
        <FontAwesome
          name='medium'
          size='4x'
          link={mediumLink}
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
        <FontAwesome
          name='linkedin-square'
          size='4x'
          link={linkedLink}
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
      {children}
      <div style={{ color: '#A0A0A0', fontSize: '14px', marginTop: '50px' }}>
      </div>
    </div>
  );
}

App.propTypes = propTypes;

export default App;
