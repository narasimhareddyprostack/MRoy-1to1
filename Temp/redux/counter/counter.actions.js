const INCR_COUNTER = "INCR_COUNTER";
const DECR_COUNTER = "DECR_COUNTER";

let incr_Counter = () => {
  return {
    type: "INCR_COUNTER",
    payload: "Incrment Counter ",
  };
};
let decr_Counter = () => {
  return {
    type: "DECR_COUNTER",
    payload: "Decrement Counter",
  };
};

export { incr_Counter, decr_Counter, INCR_COUNTER, DECR_COUNTER };
