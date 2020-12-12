//actions : we need to consume the api http://localhost:8000/product/upload
import axios from "axios";

const UPLOAD_PRODUCT_REQUEST = "UPLOAD_PRODUCT_REQUEST";
const UPLOAD_PRODUCT_SUCCESS = "UPLOAD_PRODUCT_SUCCESS";
const UPLOAD_PRODUCT_FAILURE = "UPLOAD_PRODUCT_FAILURE";

const MENS_PRODUCT_REQUEST = "MENS_PRODUCT_REQUEST";
const MENS_PRODUCT_SUCCESS = "MENS_PRODUCT_SUCCESS";
const MENS_PRODUCT_FAILURE = "MENS_PRODUCT_SUCCESS";

//upload product Actin
let uploadProduct = (product) => {
  return async (dispatch) => {
    // need to consume API, return response as payload
    //action return type and payload(API Response)
    try {
      dispatch({ type: UPLOAD_PRODUCT_REQUEST });
      let config = {
        headers: {
          "content-type": "application/json",
        },
      };
      let response = await axios.post(
        `/product/upload`,
        JSON.stringify(product),
        config
      );
      dispatch({ type: UPLOAD_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: UPLOAD_PRODUCT_FAILURE, payload: error });
    }
  };
};
//Get mens Colleciton action.
let getMensCollection = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: MENS_PRODUCT_REQUEST });
      //invoking/consuming the api - backend API
      let response = await axios.get(`/product/men`);
      dispatch({ type: MENS_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: MENS_PRODUCT_FAILURE, payload: error });
    }
  };
};
export {
  uploadProduct,
  UPLOAD_PRODUCT_REQUEST,
  UPLOAD_PRODUCT_SUCCESS,
  UPLOAD_PRODUCT_FAILURE,
  MENS_PRODUCT_REQUEST,
  MENS_PRODUCT_SUCCESS,
  MENS_PRODUCT_FAILURE,
  getMensCollection,
};
