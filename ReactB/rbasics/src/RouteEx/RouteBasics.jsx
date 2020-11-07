import React from "react";
import Registration from "../Forms/Registration";
import Home from "../Forms/Home";
import Discover from "../Forms/Discover";
import About from "../Forms/About";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function RouteBasics() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/discover"> Descover</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
        </ul>

        <Route  path="/">
          <Home />
        </Route>
        <Route path="/discover">
          <Discover />
        </Route>
        <Route path="/">
          <About />
        </Route>
        <Route path="/contact">
          <Registration />
        </Route>
      </div>
    </Router>
  );
}

export default RouteBasics;
