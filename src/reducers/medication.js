import {
  FETCH_DOG_MEDICATIONS_REQUEST,
  FETCH_DOG_MEDICATIONS_SUCCESS,
  FETCH_DOG_MEDICATIONS_ERROR,
  CREATE_NEW_MEDICATION_REQUEST,
  CREATE_NEW_MEDICATION_SUCCESS,
  CREATE_NEW_MEDICATION_ERROR,
  DELETE_DOG_MEDICATION_REQUEST,
  DELETE_DOG_MEDICATION_SUCCESS,
  DELETE_DOG_MEDICATION_ERROR
} from '../actions/medication';

const intitialState = {
  medications: [],
  loading: false,
  error: null,
  submittedForm: null,
  medicationDeleted: null,
  currentMedication: {}
};

export default function reducer(state = intitialState, action) {
  if (action.type === FETCH_DOG_MEDICATIONS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null,
      medicationDeleted: null,
      submittedForm: null
    });
  } else if (action.type === FETCH_DOG_MEDICATIONS_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      medications: [...action.medications]
    });
  } else if (action.type === FETCH_DOG_MEDICATIONS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === CREATE_NEW_MEDICATION_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null,
      submittedForm: null,
    });
  } else if (action.type === CREATE_NEW_MEDICATION_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      submittedForm: true,
      medications: [...state.medications, action.medication]
    });
  } else if (action.type === CREATE_NEW_MEDICATION_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      submittedForm: false,
      error: action.error
    });
  } else if (action.type === DELETE_DOG_MEDICATION_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === DELETE_DOG_MEDICATION_SUCCESS) {
    const medications = state.medications.filter(medication => medication.id !== action.medicationId);
    return Object.assign({}, state, {
      loading: false,
      medicationDeleted: true,
      medications: [...medications]
    });
  } else if (action.type === DELETE_DOG_MEDICATION_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      medicationDeleted: false,
      error: action.error
    });
  }
  return state;
}
