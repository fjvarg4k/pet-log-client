import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utilities';

export const FETCH_DOGS_REQUEST = 'FETCH_DOGS_REQUEST';
export const fetchDogsRequest = () => ({
  type: FETCH_DOGS_REQUEST
});

export const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS';
export const fetchDogsSuccess = dogs => ({
  type: FETCH_DOGS_SUCCESS,
  dogs
});

export const FETCH_DOGS_ERROR = 'FETCH_DOGS_ERROR';
export const fetchDogsError = error => ({
  type: FETCH_DOGS_ERROR,
  error
});


// Fetch a specific user's dogs
export const fetchDogs = () => (dispatch, getState) => {
  dispatch(fetchDogsRequest());
  const token = getState().auth.authToken;
  return (
    fetch (`${API_BASE_URL}/dog/`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({dogs}) => dispatch(fetchDogsSuccess(dogs)))
    .catch(err => {
      dispatch(fetchDogsError(err))
    })
  );
};

export const CREATE_NEW_DOG_REQUEST = 'CREATE_NEW_DOG';
export const createNewDogRequest = () => ({
  type: CREATE_NEW_DOG_REQUEST
});

export const CREATE_NEW_DOG_SUCCESS = 'CREATE_NEW_DOG_SUCCESS';
export const createNewDogSuccess = dog => ({
  type: CREATE_NEW_DOG_SUCCESS,
  dog
});

export const CREATE_NEW_DOG_ERROR = 'CREATE_NEW_DOG_ERROR';
export const createNewDogError = error => ({
  type: CREATE_NEW_DOG_ERROR,
  error
});

export const createNewDog = (dog) => (dispatch, getState) => {
  dispatch(createNewDogRequest());
  const token = getState().auth.jwtToken;
  return (
    fetch (`${API_BASE_URL}/dog`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(dog)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      console.log(res.json());
      return res.json();
    })
    .then(dog => dispatch(createNewDogSuccess(dog)))
    .catch(err => {
      dispatch(createNewDogError(err))
    })
  );
};
