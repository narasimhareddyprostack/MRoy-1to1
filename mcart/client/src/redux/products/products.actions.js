//actions : we need to consume the api http://localhost:8000/product/upload
import axios from "axios";

const UPLOAD_PRODUCT_REQUEST = "UPLOAD_PRODUCT_REQUEST";
const UPLOAD_PRODUCT_SUCCESS = "UPLOAD_PRODUCT_SUCCESS";
const UPLOAD_PRODUCT_FAILURE = "UPLOAD_PRODUCT_FAILURE";

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

export {
  uploadProduct,
  UPLOAD_PRODUCT_REQUEST,
  UPLOAD_PRODUCT_SUCCESS,
  UPLOAD_PRODUCT_FAILURE,
};
