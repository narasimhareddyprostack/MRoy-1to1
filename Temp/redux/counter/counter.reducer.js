import { INCR_COUNTER, DECR_COUNTER } from "./counter.actions";

let initialCounter = {
  counter: 0,
};
export const counterKey = "counterCard";
let counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case INCR_COUNTER:
      return {
        counter: state.counter + 1,
      };
    case DECR_COUNTER:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export { counterReducer };
