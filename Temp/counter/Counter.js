import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { incr_Counter, decr_Counter } from "./../redux/counter/counter.actions";

let Counter = () => {
  let dispatch = useDispatch();

  // read the store data from redux
  let counterInfo = useSelector((state) => {
    return state.counterCard;
  });

  let decrHandler = () => {
    dispatch(decr_Counter());
  };
  let incrHandler = () => {
    dispatch(incr_Counter());
  };
  return (
    <React.Fragment>
      <div className="container">
        <pre> {JSON.stringify(counterInfo.counter)}</pre>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <p className="h5"> Redux - Example - 2</p>
              </div>
              <div className="card-body">
                <h1> Counter: {counterInfo.counter}</h1>
                <button className="btn btn-success mr-5" onClick={decrHandler}>
                  -
                </button>
                <button className="btn btn-primary" onClick={incrHandler}>
                  {" "}
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
