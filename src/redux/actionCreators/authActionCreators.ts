import * as actionTypes from '../actionTypes/actionTypes';
import { AuthAction } from '../IRedux';

export const authStart = (): AuthAction => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token: string): AuthAction => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
  };
};

export const authFail = (error: string): AuthAction => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};

export const logOut = (): AuthAction => {
  return {
    type: actionTypes.LOG_OUT,
  };
};
