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
