import React, { PropTypes } from 'react';
import { Link } from 'react-router';
var FontAwesome = require('react-fontawesome');

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

function App({ children, routes }) {

  const githubLink = 'https://github.com/vogtn'

  return (
    <div>
      <h1>Nicolas Vogt - Web Developer</h1>
        <FontAwesome
          name='github'
          size='2x'
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
