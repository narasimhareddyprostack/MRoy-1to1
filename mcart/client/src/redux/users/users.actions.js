import axios from "axios";
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

let getRegistration = (user) => {
  //return type and payload
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
      //We need to consume the backend api
      let config = {
        headers: {
          "content-type": "application/json",
        },
      };
      let response = await axios.post(
        `/user/register`,
        JSON.stringify(user),
        config
      );
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      //
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error });
    }
  };
};

export { getRegistration, LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS };
