import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utilities';

export const FETCH_DOG_MEDICATIONS_REQUEST = 'FETCH_DOG_MEDICATIONS_REQUEST';
export const fetchDogMedicationsRequest = () => ({
  type: FETCH_DOG_MEDICATIONS_REQUEST
});

export const FETCH_DOG_MEDICATIONS_SUCCESS = 'FETCH_DOG_MEDICATIONS_SUCCESS';
export const fetchDogMedicationsSuccess = medications => ({
  type: FETCH_DOG_MEDICATIONS_SUCCESS,
  medications
});

export const FETCH_DOG_MEDICATIONS_ERROR = 'FETCH_DOG_MEDICATIONS_ERROR';
export const fetchDogMedicationsError = error => ({
  type: FETCH_DOG_MEDICATIONS_ERROR,
  error
});

export const fetchDogMedications = dogId => (dispatch, getState) => {
  dispatch(fetchDogMedicationsRequest());
  const token = getState().auth.jwtToken;
  return (
    fetch(`${API_BASE_URL}/medication/${dogId}/all`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(resJson => dispatch(fetchDogMedicationsSuccess(resJson)))
    .catch(err => {
      dispatch(fetchDogMedicationsError(err))
    })
  );
};

export const CREATE_NEW_MEDICATION_REQUEST = 'CREATE_NEW_MEDICATION_REQUEST';
export const createNewMedicationRequest = () => ({
  type: CREATE_NEW_MEDICATION_REQUEST
});

export const CREATE_NEW_MEDICATION_SUCCESS = 'CREATE_NEW_MEDICATION_SUCCESS';
export const createNewMedicationSuccess = medication => ({
  type: CREATE_NEW_MEDICATION_SUCCESS,
  medication
});

export const CREATE_NEW_MEDICATION_ERROR = 'CREATE_NEW_MEDICATION_ERROR';
export const createNewMedicationError = error => ({
  type: CREATE_NEW_MEDICATION_ERROR,
  error
});

export const createNewMedication = (dogId, medication) => (dispatch, getState) => {
  dispatch(createNewMedicationRequest());
  const token = getState().auth.jwtToken;
  return (
    fetch(`${API_BASE_URL}/medication/${dogId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(medication)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(resJson => dispatch(createNewMedicationSuccess(resJson)))
    .catch(err => {
      dispatch(createNewMedicationError(err))
    })
  );
};

export const DELETE_DOG_MEDICATION_REQUEST = 'DELETE_DOG_MEDICATION_REQUEST';
export const deleteDogMedicationRequest = () => ({
  type: DELETE_DOG_MEDICATION_REQUEST
});

export const DELETE_DOG_MEDICATION_SUCCESS = 'DELETE_DOG_MEDICATION_SUCCESS';
export const deleteDogMedicationSuccess = medicationId => ({
  type: DELETE_DOG_MEDICATION_SUCCESS,
  medicationId
});

export const DELETE_DOG_MEDICATION_ERROR = 'DELETE_DOG_MEDICATION_ERROR';
export const deleteDogMedicationError = error => ({
  type: DELETE_DOG_MEDICATION_ERROR,
  error
});

export const deleteDogMedication = medicationId => (dispatch, getState) => {
  dispatch(deleteDogMedicationRequest());
  const token = getState().auth.jwtToken;
  return (
    fetch(`${API_BASE_URL}/medication/${medicationId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => normalizeResponseErrors(res))
    // .then(res => res.json())
    .then(() => dispatch(deleteDogMedicationSuccess(medicationId)))
    .catch(err => {
      dispatch(deleteDogMedicationError(err))
    })
  );
};

export const FETCH_MEDICATION_BY_ID_REQUEST = 'FETCH_MEDICATION_BY_ID_REQUEST';
export const fetchMedicationByIdRequest = () => ({
  type: FETCH_MEDICATION_BY_ID_REQUEST
});

export const FETCH_MEDICATION_BY_ID_SUCCESS = 'FETCH_MEDICATION_BY_ID_SUCCESS';
export const fetchMedicationByIdSuccess = medication => ({
  type: FETCH_MEDICATION_BY_ID_SUCCESS,
  medication
});

export const FETCH_MEDICATION_BY_ID_ERROR = 'FETCH_MEDICATION_BY_ID_ERROR';
export const fetchMedicationByIdError = error => ({
  type: FETCH_MEDICATION_BY_ID_ERROR,
  error
});

export const fetchMedicationById = medicationId => (dispatch, getState) => {
  dispatch(fetchMedicationByIdRequest());
  const token = getState().auth.jwtToken;
  return (
    fetch(`${API_BASE_URL}/medication/${medicationId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(resJson => dispatch(fetchMedicationByIdSuccess(resJson)))
    .catch(err => {
      dispatch(fetchMedicationByIdError(err))
    })
  );
};

export const UPDATE_MEDICATION_BY_ID_REQUEST = 'UPDATE_MEDICATION_BY_ID_REQUEST';
export const updateMedicationByIdRequest = () => ({
  type: UPDATE_MEDICATION_BY_ID_REQUEST
});

export const UPDATE_MEDICATION_BY_ID_SUCCESS = 'UPDATE_MEDICATION_BY_ID_SUCCESS';
export const updateMedicationByIdSuccess = medication => ({
  type: UPDATE_MEDICATION_BY_ID_SUCCESS,
  medication
});

export const UPDATE_MEDICATION_BY_ID_ERROR = 'UPDATE_MEDICATION_BY_ID_ERROR';
export const updateMedicationByIdError = error => ({
  type: UPDATE_MEDICATION_BY_ID_ERROR,
  error
});

export const updateMedicationById = medication => (dispatch, getState) => {
  dispatch(updateMedicationByIdRequest());
  const token = getState().auth.jwtToken;
  return (
    fetch(`${API_BASE_URL}/medication/${medication.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(medication)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(resJson => dispatch(updateMedicationByIdSuccess(resJson)))
    .catch(err => {
      dispatch(updateMedicationByIdError(err))
    })
  );
};
