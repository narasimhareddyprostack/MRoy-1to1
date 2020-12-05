import React from "react"
import "./CartDropdown.scss"
import CustomButton from "../custom-buttons/customButtom"
import CartItem from "../cart-item/cartitem"
import { connect } from "react-redux"

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem, index) => (
        <CartItem key={index} item={cartItem} />
      ))}
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
})
export default connect(mapStateToProps)(CartDropdown)
