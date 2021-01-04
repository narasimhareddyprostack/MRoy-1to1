import React, { Component } from "react";
import HOC from "./HOC";
class Comments extends Component {
  render() {
    return (
      <div>
        <h1> No_Comments:{this.props.mansi}</h1>
        <button type="submit" onClick={this.props.btnClick}>
          Add Comments
        </button>
      </div>
    );
  }
}
const Ecomments = HOC(Comments, 50);

export default Ecomments;
