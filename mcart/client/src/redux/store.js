import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import { logger } from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";

let middleware = [logger, thunk];
let store = createStore(
  rootReducer,
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
