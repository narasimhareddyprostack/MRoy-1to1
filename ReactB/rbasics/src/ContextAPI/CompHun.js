import React, { Component } from "react";

import UserContext from "./UserContext";
class CompThree extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body bg-info">
                <UserContext.Consumer>
                  {(user) => {
                    return <span>{user.name}</span>;
                  }}
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
