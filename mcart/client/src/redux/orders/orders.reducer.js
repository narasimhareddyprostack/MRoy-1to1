import {
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_REQUEST,
  DECR_CART_ITEM,
  INCR_CART_ITEM,
} from "./orders.actions";

let initialState = {
  cartItems: [],
  loading: "",
  errorMessage: "",
};
let cartReducer = (state = initialState, action) => {
  let { type, payload } = action;
  console.log("....payload from reducer", payload);
  switch (type) {
    case ADD_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_CART_SUCCESS:
      //verifing the cart, items are already is there or not.
      let exists = state.cartItems.find(
        (cartItem) => cartItem._id === payload._id
      );
      if (!exists) {
        return {
          ...state,
          loading: false,
          cartItems: [...state.cartItems, payload],
        };
      }
      console.log(".... in Add to Cart Success Reducer", exists);
      return {
        ...state,
        cartItems: [...state.cartItems],
      };
    case ADD_TO_CART_FAILURE:
      return {
        ...state,
        errorMessage: payload,
      };
    case INCR_CART_ITEM:
      let incrIteams = state.cartItems.map((cartItem) => {
        if (cartItem._id === payload.productId) {
          return {
            ...cartItem,
            qty: cartItem.qty + 1,
          };
        }
      });
      return {
        ...state,
        cartItems: [...incrIteams],
      };
    case DECR_CART_ITEM:
      return {};
    default:
      return state;
  }
};

export default cartReducer;
