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
        <a href="https://generalassemb.ly/education/web-development-immersive/seattle">
          <div id="boxOne" className="boxExperience fade-in two">
            <img src="./img/generalassembly.png"></img>
          </div>
        </a>
      </div>
      <div className="box-description">GeneralAssembly Web Development Immersive</div>
      <p>After spending much of my career being self-taught, I finally decided upon learning via perfessional educational service. I wanted to be able to learn computer science concepts as well as reaffirm my current abilities in a
      classroom setting. The Web Development Immersive Program is a 12 week bootcamp centered around learning Full Stack web development including: javascript, html, css, angularjs, reactjs, ruby along with backend technologies such as
      Nodejs, Mongodb. This also gave me access to practice real world group projects, pair programming, hackathons, and meetup events so I could better utilize my employment options.</p>
      <div className="container">
        <a href="https://www.queryapp.com/">
          <div id="boxOne" className="boxExperience fade-in two">
            <img src="./img/query.png"></img>
          </div>
        </a>
      </div>
      <div className="box-description">Query.me</div>
      <p>What if sharing specific pieces of information about and with people was easier? Query.me is an approach to this solution. The Co-founders, Joseph, Mike, and Gentian,
      were generious enough to hire me as a consultant for this company, and I am enormously thankful for the opportunity. I have been able to learn so much, from react-native development
      and the intracacies of xcode to the basics of developing as a team. So far most of my work has been provided towards the webpage itself, which is primarily built on react. </p>
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
    </div>
  );
}

Experience.propTypes = propTypes;

export default Experience;
