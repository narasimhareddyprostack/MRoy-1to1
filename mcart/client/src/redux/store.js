import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./products/products.reducer";

import { logger } from "redux-logger";
import thunk from "redux-thunk";
let middleware = [logger, thunk];

let store = createStore(
  productReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export { store };

//store.js responsible to create the redux store based on reducers.

/*
{

 product:{
        products: [],
        loading: false,
        errorMesssage: "",
        selectedProducts: {},
 }

}
*/
