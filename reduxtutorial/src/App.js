import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
import React from "react";
import { store } from "./redux/store";

import { Provider } from "react-redux";

import Message from "./components/wish/Wish";
function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Product />
        <Message />
      </Provider>
    </React.Fragment>
  );
}

export default App;
