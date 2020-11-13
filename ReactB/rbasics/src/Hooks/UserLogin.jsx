import React, { useState } from "react";

//setState({}) - in class comp, It will update/merge properties automatically
//useSate() -    we need to update/merge/override property manullay -
//               for Object /Array ,we have use ... spread operator.
// extract values, copy the values.
// why we required ... operator(object/array)
function UserLogin() {
  const [user, setUser] = useState({ name: "Narasimha", email: "" });

  let nameHandler = (e) => {
    //this.setState({ userName: event.target.value });
    setUser({ ...user, name: e.target.value });
  };
  let emailHandler = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  let formHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container col-lg-4">
      <form onSubmit={formHandler}>
        <div className="form-group">
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            value={user.name}
            onChange={nameHandler}
            autoFocus
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            value={user.email}
            onChange={emailHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
    </div>
  );
}

export default UserLogin;
