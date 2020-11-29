import React from "react";

let WishMessage = () => {
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-head">
                <p className="h4">React - Redux</p>
              </div>
              <div className="card-body">
                <h1> Hello</h1>
                <button className="btn btn-success btn-sm mr-2">
                  Good Morning
                </button>
                <button className="btn btn-secondary btn-sm mr-2">
                  Good Afternoon
                </button>
                <button className="btn btn-danger btn-sm mr-2">
                  Good Night
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WishMessage;
