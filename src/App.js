import React, { Component } from 'react';
import Button from './Button';
import Bubble from './Bubble.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background-image" />
        <Button />
        <Bubble />
      </div>
    );
  }
}

export default App;
