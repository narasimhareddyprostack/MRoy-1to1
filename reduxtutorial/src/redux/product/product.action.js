const INCR = "INCR";
const DECR = "DECR";

let incrAction = () => {
  return {
    type: INCR,
    payload: "",
  };
};

let decrAction = () => {
  return {
    type: DECR,
    payload: "",
  };
};

export { incrAction, decrAction, INCR, DECR };
