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
      name: event.target.value,
    });
  };
  phoneHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  componentDidMount(){
      axios.put('localhost:9000/addUser ', user)
           .then((res)=>{

           })
           .catch()
  }
  render() {
    return (
      <div>
        <h2> Form</h2>
        <form>
          <lable>User Name</lable>
          <input
            type="text"
            value={this.state.name}
            onChange={this.nameHandler}
          />{" "}
          <br />
          <lable>User Name</lable>
          <input
            type="text"
            value={this.state.email}
            onChange={this.emailHandler}
          />
          <br />
          <lable>User Name</lable>
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
