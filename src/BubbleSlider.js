import React, { Component } from 'react';
import BubbleFirst from './BubbleFirst';
import BubbleSecond from './BubbleSecond';
import BubbleThird from './BubbleThird';

import './BubbleSlider.css';


class BubbleSlider extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const currentBubble = (
      <BubbleFirst playstate={this.props.playstate} />
    );

    return (
      <div>
        {currentBubble}
      </div>
    );
  }

}


export default BubbleSlider;
