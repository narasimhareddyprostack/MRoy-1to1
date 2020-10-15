import React, { Component } from "react";
import "./navBar.css";

export default class Navbar extends Component {
  EleStyle = { color: "blue", backgroundColor: "red" };
  render() {
    //internal Style

    //in Internal and inline style, we need to follow jsx css syntaxs
    return (
      <div>
        <h2 className="extCSS" style={this.EleStyle}>
          {" "}
          Welcome to Pro Stack Academy!{" "}
        </h2>
        <h2> Good Mornig</h2>
      </div>
    );
  }
}
// CSS                  - background-color
// React JS Style CSS   - backgroundColor
