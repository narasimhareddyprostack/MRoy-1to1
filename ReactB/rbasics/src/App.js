import React from "react";
import CompOne from "./ContextAPI/CompOne";

import UserContext from "./ContextAPI/UserContext";

let App = () => {
  let userName = {
    name: "narasimha",
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body bg-success">
                <h1> User Context App Comp : {userName.name}</h1>
                <UserContext.Provider user={userName}>
                  <CompOne />
                </UserContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
