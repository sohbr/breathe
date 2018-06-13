import React, { Component } from 'react';
import Button from './Button';
import BubbleFirst from './BubbleFirst.js';
import BubbleSecond from './BubbleSecond.js';
import BubbleThird from './BubbleThird.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playstate: "running"
    };

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePause(e) {
    e.preventDefault();
    this.setState({ playstate: "paused" });
  }

  handlePlay(e) {
    e.preventDefault();
    this.setState({ playstate: "running" });
  }

  render() {
    return (
      <div className="App">
        <div className="background-image" />

        <BubbleFirst playstate={this.state.playstate} />
        <Button onClick={this.handlePlay} />
        <Button onClick={this.handlePause} />
        <button>
          <i className="fa fa-play" aria-hidden="true">hello</i>
        </button>
      </div>
    );
  }
}

export default App;
