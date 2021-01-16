import { SIGN_IN, SIGN_OUT } from "../constants/constants";

const INITIAl_STATE = {
  isSignedIn: null,
  userId: null,
};

export const authReducer = (state = INITIAl_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};

//using named export here for the reducer//
//either named export or export default can be used//
