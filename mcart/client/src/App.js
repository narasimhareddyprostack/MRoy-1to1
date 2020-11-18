import logo from "./logo.svg";
import "./App.css";
import Navbar from "./modules/layout/components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./modules/layout/components/home/Home";
import MensCollection from "./modules/products/components/mens-collection/MensCollection";
import WomensCollection from "./modules/products/components/women-collection/WomenCollection";
import KidsCollection from "./modules/products/components/kids-collection/KidsCollection";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/products/men" component={MensCollection}></Route>
          <Route
            exact
            path="/products/women"
            component={WomensCollection}
          ></Route>
          <Route exact path="/products/kids" component={KidsCollection}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
