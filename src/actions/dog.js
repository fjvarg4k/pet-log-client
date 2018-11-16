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
  const token = getState().auth.jwtToken;
  return (
    fetch (`${API_BASE_URL}/dog`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(resJson => dispatch(fetchDogsSuccess(resJson)))
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


// Creates a new dog
export const createNewDog = dog => (dispatch, getState) => {
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
    .then(res => res.json())
    .then(resJson => dispatch(createNewDogSuccess(resJson)))
    .catch(err => {
      dispatch(createNewDogError(err))
    })
  );
};

// Clears array of dogs from state when the user logs out
export const CLEAR_DOGS_ON_LOGOUT = 'CLEAR_DOGS_ON_LOGOUT';
export const clearDogsOnLogout = () => ({
  type: CLEAR_DOGS_ON_LOGOUT
});

export const FETCH_DOG_BY_ID_REQUEST = 'FETCH_DOG_BY_ID_REQUEST';
export const fetchDogByIdRequest = () => ({
  type: FETCH_DOG_BY_ID_REQUEST
});

export const FETCH_DOG_BY_ID_SUCCESS = 'FETCH_DOG_BY_ID_SUCCESS';
export const fetchDogByIdSuccess = dog => ({
  type: FETCH_DOG_BY_ID_SUCCESS,
  dog
});

export const FETCH_DOG_BY_ID_ERROR = 'FETCH_DOG_BY_ID_ERROR';
export const fetchDogByIdError = error => ({
  type: FETCH_DOG_BY_ID_ERROR,
  error
});

// Retrieve a dog by id
export const fetchDogById = dogId => dispatch => {
  dispatch(fetchDogByIdRequest);
  return (
    fetch(`${API_BASE_URL}/dog/${dogId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(resJson => dispatch(fetchDogByIdSuccess(resJson)))
    .catch(err => {
      dispatch(fetchDogByIdError(err))
    })
  );
};

export const UPDATE_DOG_BY_ID_REQUEST = 'UPDATE_DOG_BY_ID_REQUEST';
export const updateDogByIdRequest = () => ({
  type: UPDATE_DOG_BY_ID_REQUEST
});

export const UPDATE_DOG_BY_ID_SUCCESS = 'UPDATE_DOG_BY_ID_SUCCESS';
export const updateDogByIdSuccess = dog => ({
  type: UPDATE_DOG_BY_ID_SUCCESS,
  dog
});

export const UPDATE_DOG_BY_ID_ERROR = 'UPDATE_DOG_BY_ID_ERROR';
export const updateDogByIdError = error => ({
  type: UPDATE_DOG_BY_ID_ERROR,
  error
});

// Update a dog's info by id
export const updateDogById = dog => (dispatch, getState) => {
  dispatch(updateDogByIdRequest);
  const token = getState().auth.jwtToken;
  return (
    fetch(`${API_BASE_URL}/dog/${dog.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(dog)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(resJson => dispatch(updateDogByIdSuccess(resJson)))
    .catch(err => {
      dispatch(updateDogByIdError(err))
    })
  );
};

// export const CREATE_VET_INFO_BY_ID_REQUEST = 'CREATE_VET_INFO_BY_ID_REQUEST';
// export const createVetInfoByIdRequest = () => ({
//   type: CREATE_VET_INFO_BY_ID_REQUEST
// });
//
// export const CREATE_VET_INFO_BY_ID_SUCCESS = 'CREATE_VET_INFO_BY_ID_SUCCESS';
// export const createVetInfoByIdSuccess = dog => ({
//   type: CREATE_VET_INFO_BY_ID_SUCCESS,
//   dog
// });
//
// export const CREATE_VET_INFO_BY_ID_ERROR = 'CREATE_VET_INFO_BY_ID_ERROR';
// export const createVetInfoByIdError = error => ({
//   type: CREATE_VET_INFO_BY_ID_ERROR,
//   error
// });
//
// export const createVetInfoById = dog => (dispatch, getState) => {
//   dispatch(createVetInfoByIdRequest);
//   const token = getState().auth.jwtToken;
//   return (
//     fetch(`${API_BASE_URL}/dog/${dog.id}`, {
//       method: 'PUT',
//       headers: {
//         'content-type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       },
//       body: JSON.stringify(dog)
//     })
//     .then(res => normalizeResponseErrors(res))
//     .then(res => res.json())
//     .then(resJson => dispatch(createVetInfoByIdSuccess(resJson)))
//     .catch(err => {
//       dispatch(createVetInfoByIdError(err))
//     })
//   );
// };

export const DELETE_DOG_BY_ID_REQUEST = 'DELETE_DOG_BY_ID_REQUEST';
export const deleteDogByIdRequest = () => ({
  type: DELETE_DOG_BY_ID_REQUEST
});

export const DELETE_DOG_BY_ID_SUCCESS = 'DELETE_DOG_BY_ID_SUCCESS';
export const deleteDogByIdSuccess = () => ({
  type: DELETE_DOG_BY_ID_SUCCESS
});

export const DELETE_DOG_BY_ID_ERROR = 'DELETE_DOG_BY_ID_ERROR';
export const deleteDogByIdError = error => ({
  type: DELETE_DOG_BY_ID_ERROR,
  error
});

export const deleteDogById = dogId => (dispatch, getState) => {
  dispatch(deleteDogByIdRequest);
  const token = getState().auth.jwtToken;
  return (
    fetch (`${API_BASE_URL}/dog/${dogId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => normalizeResponseErrors(res))
    // .then(res => res.json())
    .then(() => dispatch(deleteDogByIdSuccess(dogId)))
    .catch(err => {
      dispatch(deleteDogByIdError(err))
    })
  );
};
