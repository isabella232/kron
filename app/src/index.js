import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import App from "./App";
import Home from './pages/Home';
import ScheduledJobs from './pages/ScheduledJobs';

ReactDOM.render(
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/jobs" component={ScheduledJobs} />
  </App>
  </Router>,
  document.getElementById('container')
);