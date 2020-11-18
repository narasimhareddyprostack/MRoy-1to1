import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../../../assets/img/pcart.PNG";

let Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand">
        <div className="container">
          <Link to="/" className="nav-link">
            <p className="h3">ECart</p>
            {/* <img src={logoImage} alt="" /> */}
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/products/men" className="nav-link">
                  Mens Collections
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/products/women" className="nav-link">
                  Womens Collection
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/products/kids" className="nav-link">
                  Kids Collections
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
