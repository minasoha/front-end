// Import actions constants
import { LOGIN_INIT, LOGIN_SUCCESS, LOGIN_FAILURE } from "./../actions";

// Set up the initial state
const initialState = {
  isLoggedIn: localStorage.getItem("token") ? true : false,
  isLoggingIn: false,
  loginError: "",
};

// Set up the reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_INIT:
      return {
        ...state,
        isLoggingIn: true,
        loginError: "",
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoggingIn: false,
        loginError: "",
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        loginError: action.payload,
      };
    default:
      return state;
  }
};

// Export the reducer
export default reducer;
