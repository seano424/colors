import React, { Component } from "react";
import "./Box.css";

export default class Box extends Component {
  randomColor = () => {
    return Math.floor(Math.random() * 255);
  };

  randomColors = () => {
    return `rgb(${this.randomColor()}, ${this.randomColor()}, ${this.randomColor()})`;
  };

  state = {
    color: this.randomColors(),
  };

  handleClick = () => {
    this.setState({ color: this.randomColors()})
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
        className={`Box`}
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
}
