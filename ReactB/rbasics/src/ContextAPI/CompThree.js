import React, { Component } from "react";

import UserContext from "./UserContext";
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
                <UserContext.Consumer>
              {
                (user)=>{
                  <span>{JSON.stringify(user)}</span>
                }
              }

                </UserContext.Consumer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompThree;
