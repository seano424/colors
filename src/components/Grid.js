import React, { Component } from "react";
import Box from "./Box";
import "./Grid.css";

export default class Grid extends Component {
  static defaultProps = {
    numBlocks: 18,
  };

  state = {
    nums: Array.from({ length: this.props.numBlocks })
  }

  render() {
    return (
      <div className="Grid">
        {this.state.nums.map((block, i) => (
          <Box key={i}/>
        ))}
      </div>
    );
  }
}
