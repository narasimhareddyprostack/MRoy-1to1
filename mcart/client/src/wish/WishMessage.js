import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { messageKey } from "./../redux/wishMessage/wish-message.reducer";
import {
  sayGoodMornig,
  sayGoodAfterNoon,
  sayGoodNight,
} from "./../redux/wishMessage/wish-message.actions";
let WishMessage = () => {
  // useSelector()
  //useDispath()
  let dispatch = useDispatch();
  let messageInfo = useSelector((state) => {
    return state.messageCard;
  });

  let gaHandler = () => {
    dispatch(sayGoodAfterNoon());
  };
  let gnHandler = () => {
    dispatch(sayGoodNight());
  };
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header"> Redux Example</div>
              <div className="card-body">
                <h1> {messageInfo.message}</h1>
                <button
                  className="btn btn-success btn-sm mr-5"
                  onClick={() => dispatch(sayGoodMornig())}
                >
                  Good Morning
                </button>
                <button
                  className="btn btn-info btn-sm mr-5"
                  onClick={gaHandler}
                >
                  Good AfterNoon
                </button>
                <button
                  className="btn btn-danger btn-sm mr-5"
                  onClick={gnHandler}
                >
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
