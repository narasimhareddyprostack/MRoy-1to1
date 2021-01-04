import { INCR, DECR } from "./product.action";

let initialState = {
  product_Name: "Philips BT40 Portable Bluetooth Speaker",
  image:
    "https://rukminim1.flixcart.com/image/224/224/jb6tksw0/speaker/mobile-tablet-speaker/v/u/7/philips-in-bt40bk-94-original-imafyhffk49hxvga.jpeg?q=90",
  qty: 1,
  price: 1299,
};
let productReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCR:
      return {
        product: {
          ...state.product,
          qty: state.product.qty + 1,
        },
      };
    case DECR:
      return {
        product: {
          ...state.product,
          qty: state.product.qty - 1,
        },
      };
    default:
      return state;
  }
};

export default productReducer;
