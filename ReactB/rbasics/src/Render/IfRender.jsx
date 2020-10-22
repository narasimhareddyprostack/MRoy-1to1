import React, { Component } from "react";

class IfRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdmin: false,
    };
  }

  render() {
    // let adminMessage;
    // this.state.isAdmin
    //   ? (adminMessage = <h1>Admin - Loggin </h1>)
    //   : (adminMessage = <h2> User - Logggin</h2>);
    return <div>{adminMessage}</div>;
  }
}

export default IfRender;
