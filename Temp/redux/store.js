import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(rootReducer, composeWithDevTools());

export default store;

/*
    "react-redux": "^7.2.2",
   
    "redux": "^4.0.5",
    "redux-devtools-extension": "^2.13.8",
*/
