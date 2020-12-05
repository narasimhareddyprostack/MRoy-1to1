//pure funciton, it will two arg one state, action.

import { INCR, DECR } from "./counter.actions";
let initialState = {
  counter: 0,
  message:'Hello'
};
export const counterKey = "MRCounter";

let counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCR:
      return {
        counter: state.counter + 1,
      };
    case DECR:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
// reducer will update the store based on the action type
