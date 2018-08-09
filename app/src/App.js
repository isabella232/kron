import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import { Button, Navbar, Alignment } from "@blueprintjs/core";

import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <div className="App-container">
        <Navbar className="bp3-dark" fixedToTop>
            <div className="Navbar-center">
              <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Kron</Navbar.Heading>
                <Navbar.Divider />
                <NavLink activeClassName="Nav-active" exact to="/"><Button className="bp3-minimal" icon="dashboard" text="Dashboard" /></NavLink>
                <NavLink activeClassName="Nav-active" to="/jobs"><Button className="bp3-minimal" icon="time" text="Scheduled Jobs" /></NavLink>
              </Navbar.Group>
            </div>
          </Navbar>
          <div className="App-content">
            {this.props.children}
          </div>
      </div>
    )
  }
}