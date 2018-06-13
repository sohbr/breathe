import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './BubbleSecond.css';

let notchSize = 3;

let dx = Math.sin(notchSize * Math.PI/180) * 130;
let dy = Math.sqrt(Math.pow(130, 2) - Math.pow(dx, 2));
let x1 = 250 - dx;
let y1 = 250 - dy;
let x2 = 250 + dx;
let y2 = 250 - dy;

let x3 = 250 + dx;
let y3 = 250 + dy;
let x4 = 250 - dx;
let y4 = 250 + dy;



class BubbleSecond extends Component {

  render () {
    return (
      <div className="svgContainer">
        <svg height="500" width="500">
          <path className="secondGrow" d={`M${x1},${y1} A130,130 0 0,1 ${x2},${y2}`}
            fill="none" stroke="rgb(237, 237, 237)" strokeWidth="3" />
          <path className="secondGrow" d={`M${x2},${y2} A130,130 0 0,1 ${x3},${y3}`}
            fill="none" stroke="rgb(107, 177, 224)" strokeWidth="3" />
          <path className="secondGrow" d={`M${x3},${y3} A130,130 0 0,1 ${x4},${y4}`}
            fill="none" stroke="rgb(237, 237, 237)" strokeWidth="3" />
          <path className="secondGrow" d={`M${x4},${y4} A130,130 0 0,1 ${x1},${y1}`}
            fill="none" stroke="rgb(188, 107, 224)" strokeWidth="3" />


          <path className="secondGrow" d={`M${x1},${y1} A1,1, 0 0,0 ${x2},${y2}`}
            fill="rgb(237,237,237)" stroke="rgb(237,237,237)" strokeWidth="0.1" />
          <path className="secondGrow" d={`M${x3},${y3} A1,1, 0 0,0 ${x4},${y4}`}
            fill="rgb(237,237,237)" stroke="rgb(237,237,237)" strokeWidth="0.1" />

          <path className="secondOrbit"  d={`M${x1},${y1} A1,1, 0 0,0 ${x2},${y2}`}
            fill="rgb(107, 177, 224)" stroke="rgb(107, 177, 224)" strokeWidth="0.1" />
          <path className="secondOrbit" d={`M${x1},${y1} A130,130 0 0,1 ${x2},${y2}`}
            fill="none" stroke="rgb(107, 177, 224)" strokeWidth="3" />

          <circle className="secondGrow" cx="250" cy="250" r="115"
            stroke="rgb(182, 169, 242)" fill="rgb(182, 169, 242)">
          </circle>

          <text className="secondBreatheIn" x="50%" y="50%" dy="10"
            text-anchor="middle" fill="rgb(237,237,237)" >breathe in</text>
          <text className="secondBreatheOut" x="50%" y="50%" dy="10"
            text-anchor="middle" fill="rgb(237,237,237)" >breathe out</text>

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

export default BubbleSecond;
