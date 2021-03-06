import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './BubbleFirst.css';

let notchSize = 3;

let x1temp = Math.sin(notchSize * Math.PI/180) * 130;
let y1temp = Math.sqrt(Math.pow(130,2) - Math.pow(x1temp,2));
let x1 = 250 - x1temp;
let y1 = 250 - y1temp;
let x2 = 250 + x1temp;
let y2 = 250 - y1temp;

let x3temp = Math.sin((30 + notchSize) * Math.PI/180) * 130;
let y3temp = Math.sqrt(Math.pow(130,2) - Math.pow(x3temp,2));
let x3 = 250 + x3temp;
let y3 = 250 + y3temp;

let x4temp = Math.sin((30 - notchSize) * Math.PI/180) * 130;
let y4temp = Math.sqrt(Math.pow(130,2) - Math.pow(x4temp,2));
let x4 = 250 + x4temp;
let y4 = 250 + y4temp;

let x5 = 250 - x4temp;
let y5 = 250 + y4temp;

let x6 = 250 - x3temp;
let y6 = 250 + y3temp;


class BubbleFirst extends Component {

  render () {
    return (
      <div className="svgContainerFirst">
        <svg height="500" width="500">
          <path className="firstGrow" d={`M${x1},${y1} A130,130 0 0,1 ${x2},${y2}`}
            fill="none" stroke="rgb(237, 237, 237)" strokeWidth="3" />
          <path className="firstGrow" d={`M${x2},${y2} A130,130 0 0,1 ${x3},${y3}`}
            fill="none" stroke="rgb(107, 177, 224)" strokeWidth="3" />
          <path className="firstGrow" d={`M${x3},${y3} A130,130 0 0,1 ${x4},${y4}`}
            fill="none" stroke="rgb(237, 237, 237)" strokeWidth="3" />
          <path className="firstGrow" d={`M${x4},${y4} A130,130 0 0,1 ${x5},${y5}`}
            fill="none" stroke="rgb(204, 204, 204)" strokeWidth="3" />
          <path className="firstGrow" d={`M${x5},${y5} A130,130 0 0,1 ${x6},${y6}`}
            fill="none" stroke="rgb(237, 237, 237)" strokeWidth="3" />
          <path className="firstGrow" d={`M${x6},${y6} A130,130 0 0,1 ${x1},${y1}`}
            fill="none" stroke="rgb(188, 107, 224)" strokeWidth="3" />

          <path className="firstGrow" d={`M${x1},${y1} A1,1, 0 0,0 ${x2},${y2}`}
            fill="rgb(237,237,237)" stroke="rgb(237,237,237)" strokeWidth="0.1" />
          <path className="firstGrow" d={`M${x3},${y3} A1,1, 0 0,0 ${x4},${y4}`}
            fill="rgb(237,237,237)" stroke="rgb(237,237,237)" strokeWidth="0.1" />
          <path className="firstGrow" d={`M${x5},${y5} A1,1, 0 0,0 ${x6},${y6}`}
            fill="rgb(237,237,237)" stroke="rgb(237,237,237)" strokeWidth="0.1" />

          <path className="firstOrbit"  d={`M${x1},${y1} A1,1, 0 0,0 ${x2},${y2}`}
            fill="rgb(107, 177, 224)" stroke="rgb(107, 177, 224)" strokeWidth="0.1" />
          <path className="firstOrbit" d={`M${x1},${y1} A130,130 0 0,1 ${x2},${y2}`}
            fill="none" stroke="rgb(107, 177, 224)" strokeWidth="3" />

          <circle className="firstGrow" cx="250" cy="250" r="115"
            stroke="rgb(182, 169, 242)" fill="rgb(182, 169, 242)">
          </circle>

          <text className="firstBreatheIn" x="50%" y="50%" dy="10"
            textAnchor="middle" fill="rgb(237,237,237)" >breathe in</text>
          <text className="firstHold" x="50%" y="50%" dy="10"
            textAnchor="middle" fill="rgb(237,237,237)" >hold</text>
          <text className="firstBreatheOut" x="50%" y="50%" dy="10"
            textAnchor="middle" fill="rgb(237,237,237)" >breathe out</text>

        </svg>

        <Helmet>
          <style>{`
            :root {
              --ani-play: ${this.props.playstate};
            }`}
          </style>
        </Helmet>
      </div>

    );
  }

}

export default BubbleFirst;
