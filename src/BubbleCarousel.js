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
