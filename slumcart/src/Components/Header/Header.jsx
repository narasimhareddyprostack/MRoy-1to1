import React from "react"
import "./Header.scss"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { auth } from "../../firebase/firebase.utils"
import CartIcon from "../CartIcon/CartIcon"
import CartDropdown from "../cart-dropdown/CartDropdown"

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        SLUMCART
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  )
}
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
})
export default connect(mapStateToProps)(Header)
