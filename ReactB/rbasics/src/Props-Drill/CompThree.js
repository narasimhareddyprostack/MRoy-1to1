import React, { Component } from "react";

class CompThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      money: 100,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body bg-primary">
                <p> Comp Three : {this.props.mansi}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompThree;
