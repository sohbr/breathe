import React, { Component } from 'react';
import Button from './Button';
import BubbleThree from './BubbleThree.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background-image" />
        <Button />
        <BubbleThree />
      </div>
    );
  }
}

export default App;
