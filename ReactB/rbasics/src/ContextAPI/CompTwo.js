import React, { Component } from "react";

import CompThree from "./CompThree";
class CompTwo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body bg-danger">
                <p> Comp Two </p>
                <CompThree />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompTwo;
