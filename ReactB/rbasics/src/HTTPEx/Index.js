import React, { Component } from "react";
import axios from "axios";

class Index extends Component {
  state = {
    users: [],
  };

  //   componentDidMount() {
  //     axios.get(`http://localhost:9000/`).then((res) => {
  //       const users = res.data;
  //       this.setState({ users });
  //     });
  //   }
  getData = () => {
    console.log("inside getData - button click");
    axios.get(`http://localhost:9000/`).then((res) => {
      const users = res.data;
      console.log(users);
      this.setState({ users });
    });
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user, index) => (
            <li key={index}>
              {user.name} <br />
              {user.email}
            </li>
          ))}
        </ul>
        <hr />
        <button type="submit" onClick={this.getData}>
          Submit
        </button>
      </div>
    );
  }
}

export default Index;
//https://jsonplaceholder.typicode.com/users
