import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
import React from "react";
import { store } from "./redux/store";

import { Provider } from "react-redux";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Product />
        
      </Provider>
    </React.Fragment>
  );
}

export default App;
