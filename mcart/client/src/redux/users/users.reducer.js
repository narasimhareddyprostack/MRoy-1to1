//pure function , state and action
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REG_USER_FAILURE,
  REG_USER_REQUEST,
  REG_USER_SUCCESS,
} from "./users.actions";
let initialState = {
  loading: false,
  user: null,
  token: null,
  isAuthenticated: false,
  errorMessage: null,
};
let userReducer = (state = initialState, action) => {
  let { payload } = action;
  switch (action.type) {
    case REG_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REG_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REG_USER_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loading: false,
        token: payload.token,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        token: null,
        isAuthenticated: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
export default userReducer;
