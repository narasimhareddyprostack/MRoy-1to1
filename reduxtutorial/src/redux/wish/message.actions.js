const GOOD_MORNING = "GOOD_MORNING";
const GOOD_EVENING = "GOOD_EVENING";

let sayGM = () => {
  return {
    type: GOOD_MORNING,
  };
};

let sayGV = () => {
  return {
    type: GOOD_EVENING,
  };
};

export { sayGV, sayGM, GOOD_MORNING, GOOD_EVENING };
