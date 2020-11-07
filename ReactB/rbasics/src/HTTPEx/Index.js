import React, { Component } from "react";
import axios from "axios";

class Index extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:9000/`).then((res) => {
      const users = res.data;
      this.setState({ users });
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user) => (
            <li>
              {user.name} <br />
              {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Index;
//https://jsonplaceholder.typicode.com/users
