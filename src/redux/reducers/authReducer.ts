import * as authActionTypes from '../actionTypes/actionTypes';
import { AuthAction } from '../IRedux';

interface InitialState {
  loading: boolean;
  success: null;
  token: string | null;
  error: boolean;
  errorMsg: null;
}

const initialState: InitialState = {
  loading: false,
  success: null,
  token: null,
  error: false,
  errorMsg: null,
};

const authReducer = (
  action: AuthAction,
  state: InitialState = initialState,
) => {
  switch (action.type) {
    case authActionTypes.AUTH_START:
      return {
        loading: true,
        success: false,
        token: null,
        error: false,
        errorMsg: null,
      };

    case authActionTypes.AUTH_SUCCESS:
      return {
        loading: false,
        success: true,
        token: action.token,
        error: false,
        errorMsg: null,
      };

    case authActionTypes.AUTH_FAIL:
      return {
        loading: false,
        success: false,
        token: null,
        error: true,
        errorMsg: action.error,
      };

    case authActionTypes.LOG_OUT:
      return {
        loading: false,
        success: false,
        token: null,
        error: false,
        errorMsg: null,
      };

    default:
      return state;
  }
};

export default authReducer;
