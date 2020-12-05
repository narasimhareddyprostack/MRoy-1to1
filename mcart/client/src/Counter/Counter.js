import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrAction, decrAction } from "./../redux/counter/counter.actions";

let Counter = () => {
  //reading redux
  let stateInfo = useSelector((state) => {
    return state.MRCounter;
  });
  let dispatch = useDispatch();
  let decHandler = () => {
    dispatch(decrAction());
  };
  let incrHandler = () => {
    dispatch(incrAction());
  };
  return (
    <div>
      <div className="container">
        <pre>{JSON.stringify(stateInfo)}</pre>
        <div className="card">
          <div className="card-header">
            <h1> Redux Example</h1>
          </div>
          <div className="card-body">
            {/* <h1> Counter: {stateInfo.counter}</h1> */}
            <button
              className="btn btn-success btn-sm mr-5"
              onClick={decHandler}
            >
              -
            </button>
            <button className="btn btn-success btn-sm" onClick={incrHandler}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
