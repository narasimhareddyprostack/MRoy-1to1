import {
  SAY_GOOD_MORNING,
  SAY_GOOD_NIGHT,
  SAY_GOOD_AFTERNOON,
} from "./wish-message.actionTypes";
import WishMessage from "../../wish/wishMessage";

export const messageKey = "messageCard";
let initialState = {
  message: "Hello",
};
let messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAY_GOOD_MORNING:
      return {
        message: "Good Morning",
      };
    case SAY_GOOD_NIGHT:
      return {
        message: "Good Night",
      };

    case SAY_GOOD_AFTERNOON:
      return {
        message: "Good Afternoon-Second Try",
      };
    default:
      return state;
  }
};
export { messageReducer };
