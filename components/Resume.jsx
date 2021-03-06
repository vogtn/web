import React, { PropTypes } from 'react';
import { Link } from 'react-router';
var FontAwesome = require('react-fontawesome');

const propTypes = {
  children: PropTypes.element,
};

function Resume({ children }) {
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
      <p>
        Resume Page!!
      </p>
    </div>
  );
}

Resume.propTypes = propTypes;

export default Resume;
