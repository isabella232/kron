import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { Navbar, Alignment, Button } from "@blueprintjs/core";

import './App.css';
import Home from './pages/Home';
import ScheduledJobs from './pages/ScheduledJobs';

export default class App extends React.Component {

  render() {
    return (
      <div className="App-container">
        <Router>
          <div>
            <Navbar className="bp3-dark" fixedToTop>
              <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Kron</Navbar.Heading>
                <Navbar.Divider />
                <Link to="/"><Button className="bp3-minimal" icon="home" text="Dashboard" /></Link>
                <Link to="/jobs"><Button className="bp3-minimal" icon="document" text="Scheduled Jobs" /></Link>
              </Navbar.Group>
            </Navbar>
            <div className="App-content">
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/jobs" component={ScheduledJobs} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}