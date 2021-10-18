// Libraries
import axios from "axios";

// Action Constants
export const LOGIN_INIT = "LOGIN_INIT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// Standard Actions
export const loginInit = () => {
  return { type: LOGIN_INIT };
};
export const loginSuccess = (newLoginStatus) => {
  return { type: LOGIN_SUCCESS, payload: newLoginStatus };
};
export const loginFailure = (error) => {
  return { type: LOGIN_FAILURE, payload: error };
};

// Thunk Actions
export const attemptLogin = () => {
  return async (dispatch) => {
    try {
      dispatch(loginInit());
      const authInfo = await axios.post(
        "PLACEHOLER! Should be the 'login POST' URL."
      );
      return authInfo;
    } catch (error) {
      console.error("FAILED TO LOG IN!", error);
    }
  };
};
