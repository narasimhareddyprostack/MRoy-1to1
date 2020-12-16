//reduce is pure funciton, it will take two state, action
import {
  UPLOAD_PRODUCT_REQUEST,
  UPLOAD_PRODUCT_SUCCESS,
  UPLOAD_PRODUCT_FAILURE,
  MENS_PRODUCT_REQUEST,
  MENS_PRODUCT_SUCCESS,
  MENS_PRODUCT_FAILURE,
  WOMENS_PRODUCT_REQUEST,
  WOMENS_PRODUCT_SUCCESS,
  WOMENS_PRODUCT_FAILURE,
} from "./products.actions";
let initialState = {
  products: [],
  loading: false,
  errorMesssage: "",
  selectedProducts: {},
};
//pure function taking args are - state, action
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
        loading: true,
        errorMesssage: payload,
      };
    case MENS_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MENS_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case MENS_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        errorMesssage: payload,
      };
    case WOMENS_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case WOMENS_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case WOMENS_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        errorMesssage: payload,
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
