//addtoCart Actions

const ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST";
const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
const ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE";
const DECR_CART_ITEM = "DECR_CART_ITEM";
const INCR_CART_ITEM = "INCR_CART_ITEM";

let incrCartItem = (productId) => {
  return (dispatch) => {
    dispatch({ type: INCR_CART_ITEM, payload: { productId: productId } });
  };
};
let decrCartItem = (productId) => {
  return (dispatch) => {
    dispatch({ type: DECR_CART_ITEM, payload: { productId: productId } });
  };
};

let addToCart = (selectedProduct, history) => {
  return (dispatch) => {
    try {
      dispatch({ type: ADD_TO_CART_REQUEST });
      // let cartItems = { ...selectedProduct };
      dispatch({ type: ADD_TO_CART_SUCCESS, payload: selectedProduct });
      history.push("/orders/cart");
    } catch (error) {
      dispatch({ type: ADD_TO_CART_FAILURE });
    }
  };
};
export {
  addToCart,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  incrCartItem,
  decrCartItem,
  DECR_CART_ITEM,
  INCR_CART_ITEM,
};
