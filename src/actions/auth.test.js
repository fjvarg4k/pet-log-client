import * as authActions from './auth';

describe('Auth Actions', function() {
  it('Should return setAuthToken()', function() {
    const jwtToken = '123abc';
    const action = authActions.setAuthToken(jwtToken);
    expect(action.type).toEqual(authActions.SET_AUTH_TOKEN);
    expect(action.jwtToken).toEqual(jwtToken);
  });

  it('Should return clearAuth()', function() {
    const action = authActions.clearAuth();
    expect(action.type).toEqual(authActions.CLEAR_AUTH);
  });

  it('Should return authRequest()', function() {
    const action = authActions.authRequest();
    expect(action.type).toEqual(authActions.AUTH_REQUEST);
  });

  it('Should return authSuccess()', function() {
    const currentUser = 'someuser';
    const action = authActions.authSuccess(currentUser);
    expect(action.type).toEqual(authActions.AUTH_SUCCESS);
    expect(action.currentUser).toEqual(currentUser);
  });

  it('Should return authError()', function() {
    const error = 'This is an error';
    const action = authActions.authError(error);
    expect(action.type).toEqual(authActions.AUTH_ERROR);
    expect(action.error).toEqual(error);
  });
});
