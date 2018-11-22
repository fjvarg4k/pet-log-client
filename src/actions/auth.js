import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utilities';
import {saveAuthToken, clearAuthToken} from '../local-storage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = jwtToken => ({
  type: SET_AUTH_TOKEN,
  jwtToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
  type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
  type: AUTH_SUCCESS,
  currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
   type: AUTH_ERROR,
   error
});

// Stores auth token in state and localStorage, decodes and stores
// user data store in the token
const storeAuthInfo = (jwtToken, dispatch) => {
  const decodedToken = jwtDecode(jwtToken);
  dispatch(setAuthToken(jwtToken));
  dispatch(authSuccess(decodedToken.user));
  saveAuthToken(jwtToken);
};

// Log user in using provided data from login form
export const login = (username, password) => dispatch => {
  dispatch(authRequest());
  return (
    fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    // Checks for any errors in response
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({jwtToken}) => storeAuthInfo(jwtToken, dispatch))
    .catch(err => {
      const {code} = err;
      const message =
        code === 401
          ? 'Incorrect username or password'
          : 'Unable to login, please try again';
      dispatch(authError(err))
      // Could not authenticate, return a SubmissionError for Redux Form
      return Promise.reject(
        new SubmissionError({
          _error: message
        })
      );
    })
  );
};

// Refresh auth token when requested to do so
export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const jwtToken = getState().auth.jwtToken;
  return fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      // Provide existing token as credentials to get new one
      Authorization: `Bearer ${jwtToken}`
    }
  })
  // Checks for any errors in response
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(({jwtToken}) => storeAuthInfo(jwtToken, dispatch))
  .catch(err => {
    dispatch(authError(err));
    dispatch(clearAuth());
    clearAuthToken(jwtToken);
  });
};
