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
        <a href="https://www.freecodecamp.com/">
          <div id="boxOne" className="boxExperience fade-in one">
            <img src="./img/freecodecamp.png"></img>
          </div>
        </a>
      </div>
      <br />
      <div className="box-description">FreeCodeCamp</div>
      <p>This was my first foray into serious web development. Previously, I had taken classes in C# and Java which was a wonderful introduction to basic topics
      and understanding how to think praigmatically. We mostly utilized low-level logic and objects to accomplish small projects, and even participated in Microsofts
      "Hunt the Wumpus" competition. FreeCodeCamp gave me the tools and platform to understand solutions to web development. The lessons start by teaching basic arimitic with javascript
      but then quickly transitions to using objects, jquery, and utlization of API's. This helped me understand the different tools and knowledge necessary for developing web appliations
      in the current paradigm. It also gave me a sense of community and learning to utilize resources to learn on my own. From here I was able to branch out and find different stacks, and how
      people learned and utilized them.</p>
      <div className="container">
        <a href="www.query.me">
          <div id="boxOne" className="boxExperience fade-in two">
            <img src="./img/query.png"></img>
          </div>
        </a>
      </div>
      <div className="box-description">Query.me</div>
      <p>What if sharing speicfic pieces of information about and with people was easier? Query.me is an approach to this solution. The Co-founders, Joseph, Mike, and Gentian,
      were generious enough to hire me as a consultant for this company, and I am enormously thankful for the opportunity. I have been able to learn so much, from react-native development
      and the intracacies of xcode to the basics of developing as a team. So far most of my work has been provided towards the webpage itself, which is primarily built on react. </p>
    </div>
  );
}

Experience.propTypes = propTypes;

export default Experience;
