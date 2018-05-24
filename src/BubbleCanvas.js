import React, { Component } from 'react';



class BubbleCanvas extends Component {
  componentDidMount () {
    this.draw();
  }

  draw() {
    const ctx = this.refs.canvas.getContext('2d');

    ctx.clearRect(0,0,500,500);
    ctx.fillStyle = 'rgb(235, 202, 249)';
    ctx.strokeStyle = 'rgb(235, 202, 249)';
    ctx.translate(250, 250);
    ctx.save();

    //main bubble
    ctx.beginPath();
    ctx.arc(0, 0, 110, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //outer ring
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.arc(0, 0, 140, 43/28 * Math.PI, 25/84 * Math.PI);
    ctx.strokeStyle = 'rgb(107, 177, 224)';
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.strokeStyle = 'rgb(216, 216, 216)';
    ctx.arc(0, 0, 140, 31/84 * Math.PI, 53/84 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.strokeStyle = 'rgb(188, 107, 224)';
    ctx.arc(0, 0, 140, 59/84 * Math.PI, 41/28 * Math.PI);
    ctx.stroke();
    ctx.closePath();

    //transition notches
    ctx.translate(0,-135);
    ctx.beginPath();
    ctx.arc(0, 0, 12, 1.945 * Math.PI , Math.PI);
    ctx.stroke();
    ctx.translate(0,135);
    ctx.arc(0, 0, 140, 41/28 * Math.PI, 43/28 * Math.PI);
    ctx.strokeStyle = 'yellow';
    ctx.stroke();
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();

    ctx.rotate(5/6 * Math.PI);
    ctx.translate(0,-140);
    ctx.beginPath();
    // ctx.arc(0, 0, 10, 1.945 * Math.PI , Math.PI);
    // ctx.stroke();
    ctx.translate(0,140);
    ctx.arc(0, 0, 140, 41/28 * Math.PI, 43/28 * Math.PI);
    ctx.strokeStyle = 'yellow';
    ctx.stroke();
    // ctx.fillStyle = 'yellow';
    // ctx.fill();
    ctx.closePath();

    ctx.rotate(1/3 * Math.PI);
    ctx.translate(0,-140);
    ctx.beginPath();
    // ctx.arc(0, 0, 10, 1.945 * Math.PI , Math.PI);
    // ctx.stroke();
    ctx.translate(0,140);
    ctx.arc(0, 0, 140, 41/28 * Math.PI, 43/28 * Math.PI);
    ctx.strokeStyle = 'yellow';
    ctx.stroke();
    // ctx.fillStyle = 'yellow';
    // ctx.fill();
    ctx.closePath();

    // var time = new Date();
    // ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() +
    //((2 * Math.PI) / 60000) * time.getMilliseconds());
    // ctx.translate(105, 0);
    // ctx.fillRect(0, -12, 50, 24); // Shadow
    // ctx.drawImage(earth, 12, 12);
    // ctx.beginPath();
    // ctx.strokeStyle = 'red';
    // ctx.arc(0,0,5,0,2*Math.PI,true);
    // ctx.stroke();
  }

  render () {
    return (
      <canvas ref="canvas" id="bubble" width={500} height={500} />
    );
  }

}

export default BubbleCanvas;
