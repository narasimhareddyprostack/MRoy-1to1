import { createStore } from "redux";

import productReducer from "./product/product.reducer";
import { rootReducer } from "./rootReducer";

import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(rootReducer, composeWithDevTools());

export { store };
