import React, { Component } from "react";
import HOC from "./HOC";
class Counter extends Component {
  render() {
    return (
      <div>
        <h1> Counter:{this.props.mansi}</h1>
        <button type="submit" onClick={this.props.btnClick}>
          Counter
        </button>
      </div>
    );
  }
}
const ECounter = HOC(Counter, 100);
export default ECounter;
