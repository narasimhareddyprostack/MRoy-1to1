import { SAY_GOOD_MORNING } from "./wish-message.actionTypes";
let sayGoodMornig = () => {
  return {
    type: "SAY_GOOD_MORNING",
    payload: "Good Morning Messag",
  };
};
let sayGoodAfterNoon = () => {
  return {
    type: "SAY_GOOD_AFTERNOON",
    payload: "Good Night Messag",
  };
};
let sayGoodNight = () => {
  return {
    type: "SAY_GOOD_NIGHT",
    payload: "Good Night Messag",
  };
};

export { sayGoodMornig, sayGoodNight, sayGoodAfterNoon };
