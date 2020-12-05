const INCR = "INCR";
const DECR = "DECR";

let incrAction = () => {
  return {
    type: INCR,
    payload: "Increment Action",
  };
};
let decrAction = () => {
  return {
    type: DECR,
    payload: "Decrement Action",
  };
};
export { INCR, DECR, incrAction, decrAction };
//named export
