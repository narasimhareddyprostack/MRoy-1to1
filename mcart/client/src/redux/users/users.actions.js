import axios from "axios";
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

const REG_USER_REQUEST = "REG_USER_REQUEST";
const REG_USER_SUCCESS = "REG_USER_SUCCESS";
const REG_USER_FAILURE = "REG_USER_FAILURE";

let getLogin = (user, history) => {
  //actions
};
let getRegistration = (user, history) => {
  //return type and payload
  return async (dispatch) => {
    try {
      dispatch({ type: REG_USER_REQUEST });
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
      dispatch({ type: REG_USER_SUCCESS, payload: response.data });
      history.push("/users/login");
    } catch (error) {
      dispatch({ type: REG_USER_FAILURE, payload: error });
    }
  };
};

export {
  getRegistration,
  getLogin,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REG_USER_REQUEST,
  REG_USER_SUCCESS,
  REG_USER_FAILURE,
};
