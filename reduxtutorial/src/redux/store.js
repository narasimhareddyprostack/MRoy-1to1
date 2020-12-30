import { createStore } from "redux";

import productReducer from "./product/product.reducer";

import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(productReducer, composeWithDevTools());

export { store };
