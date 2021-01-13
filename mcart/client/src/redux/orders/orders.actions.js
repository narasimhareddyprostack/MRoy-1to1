//addtoCart Actions

const ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST";
const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
const ADD_TO_CART_FAILIRE = "ADD_TO_CART_FAILIRE";

let addToCart = (selectedProduct, history) => {
  return (dispatch) => {
    try {
      dispatch({ type: ADD_TO_CART_REQUEST });
      let cartItems = {
        ...selectedProduct,
      };
      dispatch({ type: ADD_TO_CART_SUCCESS, payload: cartItems });
      history.push("/orders/cart");
    } catch (error) {
      dispatch({ type: ADD_TO_CART_FAILIRE });
    }
  };
};
export {
  addToCart,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILIRE,
};
