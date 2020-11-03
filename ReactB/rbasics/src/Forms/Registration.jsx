import React, { Component } from "react";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      fullName: "",
      email: "",
    };
  }
  userNameHandler = (event) => {
    console.log(event.target.value);
    this.setState({ userName: event.target.value });
  };
  fullNameHandler = (event) => {
    this.setState({ fullName: event.target.value });
  };
  emailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  submitHander = (event) => {
    //Object
    //console.log(`this.state.email )
    alert(this.state.userName + "Email: " + this.state.email);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHander}>
          <label>User Name</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.userNameHandler}
          />
          <br />
          <label> Full Name</label>
          <input
            type="text"
            value={this.state.fullName}
            onChange={this.fullNameHandler}
          />
          <br />
          <label> Email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.emailHandler}
          />
          <br />
          <button type="submit"> Registration</button>
        </form>
      </div>
    );
  }
}

export default Registration;
