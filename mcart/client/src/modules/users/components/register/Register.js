import React from "react";

let Register = () => {
  return (
    <React.Fragment>
      <section class="p-3 bg-warning">
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
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Login"
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
