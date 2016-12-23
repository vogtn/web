import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element,
};

function ExampleComponent({ children }) {
  return (
    <div>
      <p>
        This is an example page. Refresh the page or copy/paste the url to
        test out the redirect functionality (this same page should load
        after the redirect).
      </p>
    </div>
  );
}

ExampleComponent.propTypes = propTypes;

export default ExampleComponent;
