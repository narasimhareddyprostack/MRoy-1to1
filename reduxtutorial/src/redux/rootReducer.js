import { combineReducers } from "redux";

import productReducer from "./product/product.reducer";
import messageReducer from "./wish/message.reducer";
let rootReducer = combineReducers({
  product: productReducer,
  messageData: messageReducer,
});
export { rootReducer };
//named export
