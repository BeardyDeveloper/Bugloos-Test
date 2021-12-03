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
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: InitialState = initialState,
  action: AuthAction,
) => {
  switch (action.type) {
    case authActionTypes.AUTH_START:
      return { ...state, loading: true };

    case authActionTypes.AUTH_SUCCESS:
      return { ...state, loading: false, success: true, token: action.token };

    case authActionTypes.AUTH_FAIL:
      return { ...state, loading: false, error: true, errorMsg: action.error };

    case authActionTypes.LOG_OUT:
      return { ...state, loading: false, token: null };

    default:
      return state;
  }
};

export default authReducer;
