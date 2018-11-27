import React, { Component } from 'react';
import logo from './burger.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Coming Soon!</h2>
          <img src={logo} className="BurgerLogo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
