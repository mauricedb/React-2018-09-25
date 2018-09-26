import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Add from './components/Add';
import Subtract from './components/Subtract';
import Couter from './components/Couter';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { valueReducer as value } from './valueReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(value, composeEnhancers(applyMiddleware(thunk)));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Provider store={store}>
            <Fragment>
              <Add value={1} />
              <Add value={5} />
              <Subtract value={1} />
              <Subtract value={5} />
              <Couter />
            </Fragment>
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
