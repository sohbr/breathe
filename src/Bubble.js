import React, { Component } from 'react';

let notchSize = 9;

let x1 = Math.sin(notchSize * Math.PI/180) * 130;
let y1 = Math.sqrt(Math.pow(130,2) - Math.pow(x1,2));
let x2 = 250 + x1;
let y2 = 250 - y1;

let x3 = Math.sin((30 + notchSize) * Math.PI/180) * 130;
let y3 = Math.sqrt(Math.pow(130,2) - Math.pow(x3,2));
let x4 = 250 + x3;
let y4 = 250 + y3;

let x5 = Math.sin((30 - notchSize) * Math.PI/180) * 130;
let y5 = Math.sqrt(Math.pow(130,2) - Math.pow(x5,2));
let x6 = 250 + x5;
let y6 = 250 + y5;

let x7 = 250 - x5;
let y7 = 250 + y5;

let x8 = 250 - x3;
let y8 = 250 + y3;

let x9 = 250 - x1;
let y9 = 250 - y1;


class Bubble extends Component {

  render () {
    return (
      <svg height="500" width="500">
        <path d={`M250,250 m${-x1},${-y1} A130,130 0 0,1 ${x2},${y2}`}
          fill="none" stroke="rgb(237, 237, 237)" strokeWidth="4" />
        <path d={`M${x2},${y2} A130,130 0 0,1 ${x4},${y4}`}
          fill="none" stroke="rgb(107, 177, 224)" strokeWidth="4" />
        <path d={`M${x4},${y4} A130,130 0 0,1 ${x6},${y6}`}
          fill="none" stroke="rgb(237, 237, 237)" strokeWidth="4" />
        <path d={`M${x6},${y6} A130,130 0 0,1 ${x7},${y7}`}
          fill="none" stroke="rgb(204, 204, 204)" strokeWidth="4" />
        <path d={`M${x7},${y7} A130,130 0 0,1 ${x8},${y8}`}
          fill="none" stroke="rgb(237, 237, 237)" strokeWidth="4" />
        <path d={`M${x8},${y8} A130,130 0 0,1 ${x9},${y9}`}
          fill="none" stroke="rgb(188, 107, 224)" strokeWidth="4" />
      </svg>

    );
  }

}

export default Bubble;
