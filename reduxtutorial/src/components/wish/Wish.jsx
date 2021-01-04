import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { sayGM, sayGV } from "../../redux/wish/message.actions";

let Message = () => {
  let mdata = useSelector((state) => {
    return state.messageData;
  });

  let dispatch = useDispatch();

  let gmHandler = () => {
    dispatch(sayGM());
  };

  let geHandler = () => {
    dispatch(sayGV());
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <p className="h4"> Redux Message Example</p>
              </div>
              <div className="card-body">
                <h1> Message: {mdata.message}</h1>
                <button className="btn btn-success mr-4" onClick={gmHandler}>
                  Good Morning
                </button>
                <button className="btn btn-info" onClick={geHandler}>
                  Good Evening
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Message;
