import {
  FETCH_DOGS_REQUEST,
  FETCH_DOGS_SUCCESS,
  FETCH_DOGS_ERROR,
  CREATE_NEW_DOG_REQUEST,
  CREATE_NEW_DOG_SUCCESS,
  CREATE_NEW_DOG_ERROR,
  CLEAR_DOGS_ON_LOGOUT,
  FETCH_DOG_BY_ID_REQUEST,
  FETCH_DOG_BY_ID_SUCCESS,
  FETCH_DOG_BY_ID_ERROR,
  UPDATE_DOG_BY_ID_REQUEST,
  UPDATE_DOG_BY_ID_SUCCESS,
  UPDATE_DOG_BY_ID_ERROR,
  CREATE_VET_INFO_BY_ID_REQUEST,
  CREATE_VET_INFO_BY_ID_SUCCESS,
  CREATE_VET_INFO_BY_ID_ERROR
} from '../actions/dog';

const intitialState = {
  dogs: [],
  submittedForm: null,
  loading: false,
  error: null,
  currentDog: {},
  vetAdded: false
};

export default function reducer(state = intitialState, action) {
  if (action.type === CREATE_NEW_DOG_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      submittedForm: null,
      error: null
    });
  } else if (action.type === CREATE_NEW_DOG_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      submittedForm: true,
      dogs: [...state.dogs, action.dog]
    });
  } else if (action.type === CREATE_NEW_DOG_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      submittedForm: false,
      error: action.error
    });
  } else if (action.type === FETCH_DOGS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      submittedForm: null,
      error: null
    });
  } else if (action.type === FETCH_DOGS_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      dogs: [...action.dogs]
    })
  } else if (action.type === FETCH_DOGS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === CLEAR_DOGS_ON_LOGOUT) {
    return Object.assign({}, state, {
      dogs: []
    });
  } else if (action.type === FETCH_DOG_BY_ID_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      submittedForm: null,
      error: null
    });
  } else if (action.type === FETCH_DOG_BY_ID_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      currentDog: action.dog
    });
  } else if (action.type === FETCH_DOG_BY_ID_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === UPDATE_DOG_BY_ID_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      submittedForm: null,
      error: null
    });
  } else if (action.type === UPDATE_DOG_BY_ID_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      submittedForm: true,
      currentDog: action.dog
    });
  } else if (action.type === UPDATE_DOG_BY_ID_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      submittedForm: false,
      error: action.error
    });
  } else if (action.type === CREATE_VET_INFO_BY_ID_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      submittedForm: null,
      error: null
    });
  } else if (action.type === CREATE_VET_INFO_BY_ID_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      submittedForm: true,
      vetAdded: true
    });
  }
  return state;
}
