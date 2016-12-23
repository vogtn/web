import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

function App({ children, routes }) {

  const githubLink = 'https://github.com/vogtn'

  return (
    <div>
      <h1>Nicolas Vogt - Web Developer</h1>
      <a href={githubLink}><i class="fa fa-github fa-2x"></i></a>
      {children}
      <div style={{ color: '#A0A0A0', fontSize: '14px', marginTop: '50px' }}>
      </div>
    </div>
  );
}

App.propTypes = propTypes;

export default App;
