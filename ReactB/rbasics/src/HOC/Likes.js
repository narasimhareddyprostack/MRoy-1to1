import React, { Component } from "react";
import HOC from "./HOC";
export class Likes extends Component {
  render() {
    return (
      <div>
        <h1> Total Likes : {this.props.mansi}</h1>
        <button onClick={this.props.btnClick} type="submit">
          Add More Likes
        </button>
      </div>
    );
  }
}

const ELikes = HOC(Likes, 30);

export default ELikes;
