import {
  FETCH_DOGS_REQUEST,
  FETCH_DOGS_SUCCESS,
  FETCH_DOGS_ERROR,
  CREATE_NEW_DOG_REQUEST,
  CREATE_NEW_DOG_SUCCESS,
  CREATE_NEW_DOG_ERROR
} from '../actions/dog';

const intitialState = {
  dogs: [],
  dog: {},
  loading: false,
  error: null
};

export default function reducer(state = intitialState, action) {
  if (action.type === CREATE_NEW_DOG_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === CREATE_NEW_DOG_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      dogs: [...state.dogs, action.dog]
    });
  } else if (action.type === CREATE_NEW_DOG_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }
  return state;
}
