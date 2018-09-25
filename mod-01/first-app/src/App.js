import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import UpdateFirstName from './UpdateFirstName';

class App extends Component {
  state = {
    firstName: 'Jack'
  };

  changeFirstName = e => {
    // this.state.firstName = e.target.value;
    this.setState({
      firstName: e.target.value
    });
  };

  iWasCLicked = () => {
    alert('I was clicked' + this.state.firstName);
  };

  render() {
    const { firstName } = this.state;

    const people = ['Maurice', 'Kai', 'Kai'];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. hello
          Glasgow
        </p>

        <p>The time is: {new Date().toLocaleTimeString()}</p>
        <UpdateFirstName
          firstName={firstName}
          changeFirstName={this.changeFirstName}
        />
        <Greeting firstName={firstName} />
        <Greeting firstName="Mike" />
        <Greeting firstName="John" lastName="The Scot" />
        <Greeting />

        <button onClick={this.iWasCLicked}>CLick me</button>

        {people.map((p, i) => (
          <Greeting key={i} firstName={p} />
        ))}
      </div>
    );
  }
}

export default App;
