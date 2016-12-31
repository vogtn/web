import React, { PropTypes } from 'react';
import { Link } from 'react-router';
var FontAwesome = require('react-fontawesome');

const propTypes = {
  children: PropTypes.element,
};

function Projects({ children }) {
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
          <div id="boxOne" className="box fade-in one">
            <img src="./img/reactwebsite.png"></img>
          </div>
        </a>
      </div>
      <div className="box-description">React Website</div>
      <p>This website was built using a react/react-router boilerplate by:<a href="https://github.com/rafrex/">rafrex</a>, which utilizes gh-pages for the routes.
          I build a modern design and centered around the animated box routes. My plan is to use this as a portfolio of my web development work. This was meant to improve upon
          my use of a Bootstrap website which can be found here: <a href="http://vogtn.github.io/WebPage2/">Bootstrap Website</a> The git repo for this website can be found <a href="https://github.com/vogtn/web"></a>here.</p>
          <div className="container">
            <a href="https://github.com/vogtn/nodeUpandRunning">
              <div id="boxTwo" className="box fade-in two">
                <img src="./img/nodeupandrunning.png"></img>
              </div>
            </a>
          </div>
          <div className="box-description">Node: "Up and Running" Summary </div>
          <p>The purpose of this collection of node programs is to gain syntatic muscle memory & overall exposure to a backend technology (node) using: "Node Up and Running" by: Tom Hughes-Croucher, Mike Wilson. This will remain a useful "cheatsheet" and reference guide for my node projects such as: <br/> <a href="https://github.com/vogtn/NodeTravelSite"><b>Node Travel Site</b></a>. or <a href="https://github.com/vogtn/twitterNodeSentiment"><b>Twitter Sentiment Analysis </b></a>
            Concepts in these tutorials include: Loop, single-threaded, I/O, Serial vs. Parallel I/O, req and res objects, Cluster module, Listening events (server.on()), Readable and Writeable Streams, DNS module, Processes, Child Processes, CouchDB, Redis, MongoDB, mySQL, Mongoose, Schema, Sequelize, Connection Pooling, MQ Protocols, RabbitMQ, ACMQ, Express.
            A full note guide can be found under the file: "Node notes.doc" in the <a href="https://github.com/vogtn/nodeUpandRunning">git repo</a>.
          </p>
          <div className="container">
            <a href="https://github.com/vogtn/wikipedia-search">
              <div id="boxThree" className="box fade-in three">
                <img src="./img/wikipediaApp.png"></img>
              </div>
            </a>
          </div>
          <div className="box-description">wikipedia viewer</div>
          <p>One of my first apps, using the Wikipedia API via jquery and displaying the result of the search to a responsive text area. I learned so much in developing this, from how to properly handle fetches, and responsive formatting.
          The best lesson I learned was: It's easy to claim you know what's best for the user until you use it yourself. I didn't realize how silly it would be to have a search function that would only search after button pressing. Then it's just Wikipedia!
         The usefulness of the app comes in the response from key presses. I'm glad I spent the time to realize this flow.
          </p><br />
    </div>
  );
}

Projects.propTypes = propTypes;

export default Projects;
