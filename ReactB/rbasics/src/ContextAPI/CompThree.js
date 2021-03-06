import React, { Component } from "react";
import CompHun from "./CompHun";
import UserContext from "./UserContext";
class CompThree extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body bg-primary">
                <UserContext.Consumer>
                  {(user) => {
                    return <span>{user.name}</span>;
                  }}
                </UserContext.Consumer>
                <CompHun />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompThree;
