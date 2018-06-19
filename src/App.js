import React, { Component } from 'react';
import Button from './Button';
import Stopwatch from './Stopwatch';

import BubbleCarousel from './BubbleCarousel';
import BubbleFirst from './BubbleFirst';
import BubbleSecond from './BubbleSecond';
import BubbleThird from './BubbleThird';
import FontAwesome from 'react-fontawesome';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playstate: "running",
      fontawesome: "fa-pause"
    };

    this.handlePlay = this.handlePlay.bind(this);
  }


  handlePlay(e) {
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
        <Stopwatch playstate={this.state.playstate}/>
        <div className="bubblesContainer">
          <BubbleCarousel playstate={this.state.playstate} />
        </div>
        <FontAwesome className={this.state.fontawesome} size='2x'
          onClick={this.handlePlay} />

      </div>
    );
  }
}

export default App;
