import React, { Component } from 'react';
import Button from './Button';
import BubbleFirst from './BubbleFirst.js';
import BubbleSecond from './BubbleSecond.js';
import BubbleThird from './BubbleThird.js';

import './App.css';
var FontAwesome = require('react-fontawesome');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playstate: "running",
      fontawesome: "fa-pause"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.playstate === "running") {
      this.setState({ playstate: "paused", fontawesome: "fa-play" });
    } else {
      this.setState({ playstate: "running", fontawesome: "fa-pause" });
    }
  }


  render() {
    return (
      <div className="App">
        <div className="background-image" />

        <BubbleFirst playstate={this.state.playstate} />
        <FontAwesome className={this.state.fontawesome} size='2x'
          onClick={this.handleClick} />

      </div>
    );
  }
}

export default App;
