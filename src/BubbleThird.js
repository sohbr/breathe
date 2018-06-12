import React, { Component } from 'react';
import './BubbleThird.css';

let notchSize = 3;

let short = Math.sin(notchSize * Math.PI/180) * 130;
let long = Math.sqrt(Math.pow(130,2) - Math.pow(short,2));
let x1 = 250 - short;
let y1 = 250 - long;
let x2 = 250 + short;
let y2 = 250 - long;

let x3 = 250 + long;
let y3 = 250 - short;
let x4 = 250 + long;
let y4 = 250 + short;

let x5 = 250 + short;
let y5 = 250 + long;
let x6 = 250 - short;
let y6 = 250 + long;

let x7 = 250 - long;
let y7 = 250 + short;
let x8 = 250 - long;
let y8 = 250 - short;


class BubbleThird extends Component {

  render () {
    return (
      <div className="svgContainer">
        <svg height="500" width="500">
          <path className="thirdGrow" d={`M${x1},${y1} A130,130 0 0,1 ${x2},${y2}`}
            fill="none" stroke="rgb(237, 237, 237)" strokeWidth="3" />
          <path className="thirdGrow" d={`M${x2},${y2} A130,130 0 0,1 ${x3},${y3}`}
            fill="none" stroke="rgb(107, 177, 224)" strokeWidth="3" />
          <path className="thirdGrow" d={`M${x3},${y3} A130,130 0 0,1 ${x4},${y4}`}
            fill="none" stroke="rgb(237, 237, 237)" strokeWidth="3" />
          <path className="thirdGrow" d={`M${x4},${y4} A130,130 0 0,1 ${x5},${y5}`}
            fill="none" stroke="rgb(204, 204, 204)" strokeWidth="3" />
          <path className="thirdGrow" d={`M${x5},${y5} A130,130 0 0,1 ${x6},${y6}`}
            fill="none" stroke="rgb(237, 237, 237)" strokeWidth="3" />
          <path className="thirdGrow" d={`M${x6},${y6} A130,130 0 0,1 ${x7},${y7}`}
            fill="none" stroke="rgb(188, 107, 224)" strokeWidth="3" />
          <path className="thirdGrow" d={`M${x7},${y7} A130,130 0 0,1 ${x8},${y8}`}
            fill="none" stroke="rgb(237, 237, 237)" strokeWidth="3" />
          <path className="thirdGrow" d={`M${x8},${y8} A130,130 0 0,1 ${x1},${y1}`}
            fill="none" stroke="rgb(204, 204, 204)" strokeWidth="3" />

          <path className="thirdGrow" d={`M${x1},${y1} A1,1, 0 0,0 ${x2},${y2}`}
            fill="rgb(237,237,237)" stroke="rgb(237,237,237)" strokeWidth="0.1" />
          <path className="thirdGrow" d={`M${x3},${y3} A1,1, 0 0,0 ${x4},${y4}`}
            fill="rgb(237,237,237)" stroke="rgb(237,237,237)" strokeWidth="0.1" />
          <path className="thirdGrow" d={`M${x5},${y5} A1,1, 0 0,0 ${x6},${y6}`}
            fill="rgb(237,237,237)" stroke="rgb(237,237,237)" strokeWidth="0.1" />
          <path className="thirdGrow" d={`M${x7},${y7} A1,1, 0 0,0 ${x8},${y8}`}
            fill="rgb(237,237,237)" stroke="rgb(237,237,237)" strokeWidth="0.1" />

          <path className="thirdOrbit"  d={`M${x1},${y1} A1,1, 0 0,0 ${x2},${y2}`}
            fill="rgb(107, 177, 224)" stroke="rgb(107, 177, 224)" strokeWidth="0.1" />
          <path className="thirdOrbit" d={`M${x1},${y1} A130,130 0 0,1 ${x2},${y2}`}
            fill="none" stroke="rgb(107, 177, 224)" strokeWidth="3" />

          <circle className="thirdGrow" cx="250" cy="250" r="115"
            stroke="rgb(182, 169, 242)" fill="rgb(182, 169, 242)">
          </circle>

          <text className="thirdBreatheIn" x="50%" y="50%" dy="10"
            text-anchor="middle" fill="rgb(237,237,237)" >breathe in</text>
          <text className="thirdHold" x="50%" y="50%" dy="10"
            text-anchor="middle" fill="rgb(237,237,237)" >hold</text>
          <text className="thirdBreatheOut" x="50%" y="50%" dy="10"
            text-anchor="middle" fill="rgb(237,237,237)" >breathe out</text>


        </svg>

      </div>

    );
  }

}

export default BubbleThird;
