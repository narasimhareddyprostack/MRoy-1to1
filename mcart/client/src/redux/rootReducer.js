import { combineReducers } from "redux";
import productReducer from "./products/products.reducer";
let rootReducer = combineReducers({ mproducts: productReducer });
export { rootReducer };
//named export
