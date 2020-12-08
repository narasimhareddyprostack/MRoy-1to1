//reduce is pure funciton, it will take two state, action
import {
  UPLOAD_PRODUCT_REQUEST,
  UPLOAD_PRODUCT_SUCCESS,
  UPLOAD_PRODUCT_FAILURE,
} from "./products.actions";
let initialState = {
  products: [],
  loading: false,
  errorMesssage: "",
  selectedProducts: {},
};

let productReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case UPLOAD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case UPLOAD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessge: payload,
      };
    default:
      return state;
  }
};

export default productReducer;

/*
{

 product:{
        products: [],
        loading: false,
        errorMesssage: "",
        selectedProducts: {},
 }

}

*/
