import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Rugby from './components/Rugby';
import Soccer from './components/Soccer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <BrowserRouter>
          <Fragment>
            <nav>
              <Link to="/soccer">Soccer</Link>
              &nbsp;
              <Link to="/rugby">Rugby</Link>
              {/* <a href="/soccer">Soccer</a>
              &nbsp;
              <a href="/rugby">Rugby</a> */}
            </nav>
            <Switch>
              <Route path="/soccer" component={Soccer} />
              <Route path="/rugby/:team" component={Rugby} />
              <Route path="/rugby" component={Rugby} />
              <Route path="/" render={() => <div>Choose your sport.</div>} />
              {/* <Soccer />
            <Rugby /> */}
            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
