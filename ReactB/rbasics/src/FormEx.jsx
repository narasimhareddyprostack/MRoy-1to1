import React, { Component } from "react";

export default class FormEx extends Component {
  style_element = { margin: 15, padding: 15 };
  state = {
    input1: "Narasimha",
    input2: "99999",
  };
  // constructor(){
  //     super()
  //     this.showInputValue = this.showInputValue.bind(this)
  // }
  showInputValue = () => {
    console.log("Name:" + this.state.input1);
    console.log("Name:" + this.state.input2);
  };

  changeValue = (event) => {
    console.log("Test");
    if (event.target.name === "input1") {
      //this.state.input1 = event.target.value;
      this.setState({ input1: event.target.value });
    }
    if (event.target.name === "input2") {
      //this.state.input2 = event.target.value;
      this.setState({ input2: event.target.value });
    }
  };
  // showInputValue() {
  //    console.log("Name:" + this.state.input1);
  //    console.log("Name:" + this.state.input2);
  // }

  render() {
    return (
      <div>
        <hr />
        <label>Name</label>
        <input
          type="text"
          id="input1"
          style={this.style_element}
          onChange={this.changeValue}
          name="input1"
        />{" "}
        <br />
        <label>Password</label>
        <input
          type="password"
          id="input2"
          style={this.style_element}
          onChange={this.changeValue}
          name="input2"
        />
        <button type="submit" onClick={this.showInputValue}>
          {" "}
          Show{" "}
        </button>
        <br />
        <span> Name: {this.state.input1}</span>
        <br />
        <span> Password: {this.state.input2}</span>
      </div>
    );
  }
}
