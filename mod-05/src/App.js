import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Add from './components/Add';
import Subtract from './components/Subtract';
import COunter from './components/Couter';
import Couter from './components/Couter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Add value={1} />
          <Add value={5} />
          <Subtract value={1} />
          <Subtract value={5} />
          <Couter />
        </div>
      </div>
    );
  }
}

export default App;
