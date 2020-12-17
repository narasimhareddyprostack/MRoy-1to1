import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {getRegistration} from './../../../../redux/users/users.actions';

let Register = () => {
  let dispatch = useDispatch();
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
  let RegistrationHandler = (event) => {
    event.preventDefault();
    //console.log(user);
    dispatch(getRegistration(user));

  };
  return (
    <React.Fragment>
      <section className="p-3 bg-warning">
        <div className="container">
          <div className="row animated flipInY">
            <div className="col">
              <div className="h3">
                <p>
                  <i className="fa fa-sign-in-alt mr-2" />
                  Login
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <div className="card animated jello ">
                <div className="card-header bg-dark">
                  <h4 className="text-white">Register Here</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={RegistrationHandler}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        required
                        name="name"
                        value={user.name}
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        value={user.email}
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        value={user.password}
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Register"
                        className="form-control btn btn-primary"
                      />
                    </div>
                  </form>

                  <small className="font-weight-bold">
                    Have Account ! ?
                    <a href="/users/register">
                      <i className="fa fa-sign-in-alt mr-2" />
                      Login
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Register;
