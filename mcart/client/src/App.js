import logo from "./logo.svg";
import "./App.css";
import Navbar from "./modules/layout/components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./modules/layout/components/home/Home";
import MensCollection from "./modules/products/components/mens-collection/MensCollection";
import WomensCollection from "./modules/products/components/women-collection/WomenCollection";
import KidsCollection from "./modules/products/components/kids-collection/KidsCollection";
import Login from "./modules/users/components/login/Login";
import Profile from "./modules/users/components/profile/Profile";
import Register from "./modules/users/components/register/Register";
import UploadProducts from "./modules/products/components/upload-products/UploadProducts";
import Cart from "./modules/orders/components/cart/Cart";
import ProductDetails from "./modules/products/components/product-details/ProductDetails";

import Alert from "./modules/layout/components/alert/Alert";
import React, { useEffect } from "react";
import { store } from "./redux/store";
import { getUserInfo } from "./redux/users/users.actions";
import { useDispatch } from "react-redux";
function App() {
  let dispatch = useDispatch();
  // to main user data entire the application.
  // useEffect(() => {
  //   store.dispatch(getUserInfo);
  // });

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);
  return (
    <React.Fragment>
      <div className="App">
        <Router>
          <Navbar />
          <div>
            <Alert />
          </div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route
              exact
              path="/products/men"
              component={MensCollection}
            ></Route>
            <Route
              exact
              path="/products/women"
              component={WomensCollection}
            ></Route>
            <Route
              exact
              path="/products/kids"
              component={KidsCollection}
            ></Route>
            <Route
              exact
              path="/products/upload"
              component={UploadProducts}
            ></Route>

            <Route exact path="/product/:id" component={ProductDetails}></Route>
            <Route exact path="/users/login" component={Login}></Route>
            <Route exact path="/users/profile" component={Profile}></Route>
            <Route exact path="/users/register" component={Register}></Route>
            <Route exact path="/orders/cart" component={Cart}></Route>
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;

/*




*/
