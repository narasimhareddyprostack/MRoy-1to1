import { combineReducers } from "redux";

import { counterKey } from "./counter/counter.reducer";
import counterReducer from "./counter/counter.reducer";
import messageReducer from "./wishMessage/wish-message.reducer";

import { messageKey } from "./wishmessage/wish-message.reducer";

let rootReducer = combineReducers({
  [counterKey]: counterReducer,
});
export { rootReducer };
//named export
