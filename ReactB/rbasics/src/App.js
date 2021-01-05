import React, { Component } from "react";
import CompOne from "./ContextAPI/CompOne";
import UserContext from "./ContextAPI/UserContext";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Narasimha",
      },
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body bg-success">
                <h1> User Context App Comp : {this.state.user.name}</h1>
                <UserContext.Provider value={this.state.user}>
                  <CompOne />
                </UserContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
