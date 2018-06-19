import React, { Component } from 'react';

import BubbleSlider from './BubbleSlider.js';
import BubbleFirst from './BubbleFirst.js';
import BubbleSecond from './BubbleSecond.js';
import BubbleThird from './BubbleThird.js';
import Arrow from './Arrow';

import './BubbleCarousel.css';

class BubbleCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBubbleIndex: 0
    };

    this.previousBubble = this.previousBubble.bind(this);
    this.nextBubble = this.nextBubble.bind(this);
  }

  previousBubble(e) {
    e.preventDefault();
    const { currentBubbleIndex } = this.state;
    const shouldResetIndex = currentBubbleIndex === 0;
    const index = shouldResetIndex ? 2 : currentBubbleIndex - 1;

    this.setState({
      currentBubbleIndex: index
    });
  }

  nextBubble(e) {
    e.preventDefault();
    const { currentBubbleIndex } = this.state;
    const shouldResetIndex = currentBubbleIndex === 2;
    const index = shouldResetIndex ? 0 : currentBubbleIndex + 1;

    this.setState({
      currentBubbleIndex: index
    });
  }

  render() {

    return (
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction={this.previousBubble}
          glyph="&#9664;" />
        <BubbleFirst playstate={this.props.playstate} />
        <BubbleSecond playstate={this.props.playstate} />
        <BubbleThird playstate={this.props.playstate} />
        <Arrow
          direction="right"
          clickFunction={this.nextBubble}
          glyph="&#9654;" />
      </div>
    );
  }

}

export default BubbleCarousel;
