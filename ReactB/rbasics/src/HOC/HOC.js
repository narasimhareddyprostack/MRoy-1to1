import React, { Component } from "react";

const HOC = (Component, data) => {
  console.log("data", data);
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: data,
      };
    }
    btnHandler = () => {
      console.log("Inside HOC");
      this.setState({
        counter: this.state.counter + 1,
      });
    };
    render() {
      return (
        <Component mansi={this.state.counter} btnClick={this.btnHandler} />
      );
    }
  };
};

export default HOC;
