import React, { Component } from "react";
import CompTwo from "./CompTwo";
class CompOne extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body bg-gray">
                <p> Comp - One</p>
                <CompTwo  />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompOne;
