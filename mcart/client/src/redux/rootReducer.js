import { combineReducers } from "redux";
import productReducer from "./products/products.reducer";
import userReducer from "./users/users.reducer";
import alertReducer from "./layout/layout.reducer";
let rootReducer = combineReducers({
  mproducts: productReducer,
  userData: userReducer,
  alert: alertReducer,
});
export { rootReducer };
//named export
