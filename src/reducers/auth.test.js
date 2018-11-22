import * as authActions from '../actions/auth';
import authReducer from './auth';

describe('Auth Reducer', function() {
  let intitialState;

  beforeEach(() => {
    intitialState = {
      jwtToken: null,
      currentUser: null,
      loading: false,
      error: null
    };
  });

  it('Should handle SET_AUTH_TOKEN', function() {
    const jwtToken = '123abc';
    const state = authReducer(intitialState, authActions.setAuthToken(jwtToken));
    intitialState.jwtToken = jwtToken;
    expect(state).toEqual(intitialState);
  });

  it('Should handle CLEAR_AUTH', function() {
    const state = authReducer(intitialState, authActions.clearAuth());
    expect(state).toEqual(intitialState);
  });

  it('Should handle AUTH_REQUEST', function() {
    const state = authReducer(intitialState, authActions.authRequest());
    intitialState.loading = true;
    expect(state).toEqual(intitialState);
  });

  it('Should handle AUTH_SUCCESS', function() {
    const currentUser = 'someuser';
    const state = authReducer(intitialState, authActions.authSuccess(currentUser));
    intitialState.currentUser = currentUser;
    expect(state).toEqual(intitialState);
  });

  it('Should handle AUTH_ERROR', function() {
    const error = 'This is an error.';
    const state = authReducer(intitialState, authActions.authError(error));
    intitialState.error = error;
    expect(state).toEqual(intitialState);
  });
});
