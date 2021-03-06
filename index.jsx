import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'current-input';

import App from './components/App';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import ExampleComponent from './components/ExampleComponent';
import ExampleTwoDeepComponent from './components/ExampleTwoDeepComponent';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';




const routes = (
  <Route path="/web/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />

    <Route path="/web/example" mapMenuTitle="Example" component={ExampleComponent}>
      <Route path="/web/two-deep" mapMenuTitle="Two Deep" component={ExampleTwoDeepComponent} />
    </Route>

    <Route path="/web/projects" mapMenuTitle="Projects" component={Projects}>
    </Route>

    <Route path="/web/experience" mapMenuTitle="Experience" component={Experience}>
    </Route>

    <Route path="/web/resume" mapMenuTitle="Resume" component={Resume}>
    </Route>

    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);


render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
);
