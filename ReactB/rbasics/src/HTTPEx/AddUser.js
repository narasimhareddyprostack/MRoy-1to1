import React, { Component } from "react";
import axios from "axios";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }
  nameHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  emailHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  phoneHandler = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };
  formHandler = (e) => {
    const user = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
    };
    console.log(user);
    axios
      .post(`http://localhost:9000/addUser`, user)
      .then((res) => {})
      .catch();
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <h2> Form</h2>
        <form onSubmit={this.formHandler}>
          <label>User Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.nameHandler}
          />{" "}
          <br />
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.emailHandler}
          />
          <br />
          <label>Phone</label>
          <input
            type="text"
            value={this.state.phone}
            onChange={this.phoneHandler}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUser;
//https://jsonplaceholder.typicode.com/users
