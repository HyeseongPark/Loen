import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            href="https//reactjs.org"
            target="_blank"
            rel="nooper noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;
