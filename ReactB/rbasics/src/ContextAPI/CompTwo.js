import React, { Component } from "react";
import CompThree from "./CompThree";
import UserContext from "./UserContext";
class CompTwo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body bg-danger">
                <p> Comp Two </p>
                <UserContext.Consumer>
                  {(user) => {
                    return <h5>{user.name}</h5>;
                  }}
                </UserContext.Consumer>
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
