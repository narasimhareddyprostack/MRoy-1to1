import React, { useState } from "react";
import axios from "axios";

let User = () => {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let inputHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  let formHandler = (event) => {
    event.preventDefault();
    // let reg_URL = `localhost:5000/user/register`;
    let config = {
      headers: {
        "content-type": "application/json",
      },
    };
    let response = axios.post(`/user/register`, JSON.stringify(user), config);
    //console.log(response.data);
  };

  return (
    <React.Fragment>
      <pre> {JSON.stringify(user)}</pre>
      <form onSubmit={formHandler}>
        <label>Name</label>
        <input
          type="text"
          onChange={inputHandler}
          name="name"
          value={user.name}
        />{" "}
        <br />
        <br />
        <label>Email</label>
        <input
          type="text"
          onChange={inputHandler}
          name="email"
          value={user.email}
        />{" "}
        <br />
        <br />
        <label>Password</label>
        <input
          type="text"
          onChange={inputHandler}
          name="password"
          value={user.password}
        />{" "}
        <br />
        <br />
        <button type="submit">Sign Up </button>
      </form>
    </React.Fragment>
  );
};

export default User;
