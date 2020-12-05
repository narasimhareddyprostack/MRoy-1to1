//it contains all reducer - messageReducer, counterReducer
import { combineReducers } from "redux";
import { messageReducer } from "./wishMessage/wish-message.reducer";

import { messageKey } from "./wishMessage/wish-message.reducer";
import { counterKey, counterReducer } from "./counter/counter.reducer";
let rootReducer = combineReducers({
  [messageKey]: messageReducer,
  [counterKey]: counterReducer,
});
export { rootReducer };
