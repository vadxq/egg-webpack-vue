import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <hi>Hello wolrd! React</hi>
      </div>
    )
  };
}

export default hot(module)(App);