//addtoCart Actions

const ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST";
const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
const ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE";
const DECR_CART_ITEM = "DECR_CART_ITEM";
const INCR_CART_ITEM = "INCR_CART_ITEM";

const DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART";

let deleteCartItem = (productId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: DELETE_ITEM_FROM_CART,
        payload: { productId: productId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
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

let addToCart = (selectedProduct, qty, history) => {
  return (dispatch) => {
    try {
      dispatch({ type: ADD_TO_CART_REQUEST });
      let cartItems = { ...selectedProduct, qty: Number(qty) };

      dispatch({ type: ADD_TO_CART_SUCCESS, payload: cartItems });
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
  DELETE_ITEM_FROM_CART,
  deleteCartItem,
};
