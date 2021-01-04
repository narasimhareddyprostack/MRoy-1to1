//PURE FUNCIOTN (STATE, ACTION)
import { GOOD_MORNING, GOOD_EVENING } from "./message.actions";
let defaultState = {
  message: "Hello",
};
let messageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GOOD_MORNING:
      return {
        message: "Good Morming! Breakfast Time!",
      };
    case GOOD_EVENING:
      return {
        message: "Good Evening! Snack Time!",
      };
    default:
      return state;
  }
};

export default messageReducer;
