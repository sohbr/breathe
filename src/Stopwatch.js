import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsElapsed: 0
    };

    this.addSecond();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.playstate === "paused") {
      clearInterval(this.increment);
    } else {
      this.addSecond();
    }
  }

  addSecond() {
    this.increment = setInterval(function() {
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      });}.bind(this), 1000);
  }

  getSeconds() {
    return ('0' + this.state.secondsElapsed % 60).slice(-2);
  }

  getMinutes() {
    return ('0' + Math.floor(this.state.secondsElapsed / 60)).slice(-2);
  }

  render() {
    return (
      <div className="time" >{this.getMinutes() + ":" + this.getSeconds()}</div>
    );
  }

}

export default Stopwatch;
