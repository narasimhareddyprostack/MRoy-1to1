import {
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_FAILIRE,
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
      return {
        ...state,
        cartItems: payload,
      };
    case ADD_TO_CART_FAILIRE:
      return {
        ...state,
        errorMessage: payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
