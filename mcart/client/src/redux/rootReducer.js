import { combineReducers } from "redux";
import productReducer from "./products/products.reducer";

import userReducer from "./users/users.reducer";
let rootReducer = combineReducers({
  mproducts: productReducer,
  userData: userReducer,
});
export { rootReducer };
//named export
