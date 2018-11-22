import * as medicationActions from './medication';

describe('Medication Actions', function() {
  it('Should return fetchDogMedicationsRequest()', function() {
    const action = medicationActions.fetchDogMedicationsRequest();
    expect(action.type).toEqual(medicationActions.FETCH_DOG_MEDICATIONS_REQUEST);
  });

  it('Should return fetchDogMedicationsSuccess()', function() {
    const medications = ['medication1', 'medication2'];
    const action = medicationActions.fetchDogMedicationsSuccess(medications);
    expect(action.type).toEqual(medicationActions.FETCH_DOG_MEDICATIONS_SUCCESS);
    expect(action.medications).toEqual(medications);
  });

  it('Should return fetchDogMedicationsError()', function() {
    const error = 'This is an error.';
    const action = medicationActions.fetchDogMedicationsError(error);
    expect(action.type).toEqual(medicationActions.FETCH_DOG_MEDICATIONS_ERROR);
    expect(action.error).toEqual(error);
  });

  it('Should return createNewMedicationRequest()', function() {
    const action = medicationActions.createNewMedicationRequest();
    expect(action.type).toEqual(medicationActions.CREATE_NEW_MEDICATION_REQUEST);
  });

  it('Should return createNewMedicationSuccess()', function() {
    const medication = {
      name: 'medication'
    }
    const action = medicationActions.createNewMedicationSuccess(medication);
    expect(action.type).toEqual(medicationActions.CREATE_NEW_MEDICATION_SUCCESS);
    expect(action.medication).toEqual(medication);
  });

  it('Should return createNewMedicationError()', function() {
    const error = 'This is an error.';
    const action = medicationActions.createNewMedicationError(error);
    expect(action.type).toEqual(medicationActions.CREATE_NEW_MEDICATION_ERROR);
    expect(action.error).toEqual(error);
  });

  it('Should return deleteDogMedicationRequest()', function() {
    const action = medicationActions.deleteDogMedicationRequest();
    expect(action.type).toEqual(medicationActions.DELETE_DOG_MEDICATION_REQUEST);
  });

  it('Should return deleteDogMedicationSuccess()', function() {
    const medicationId = '123abc';
    const action = medicationActions.deleteDogMedicationSuccess(medicationId);
    expect(action.type).toEqual(medicationActions.DELETE_DOG_MEDICATION_SUCCESS);
    expect(action.medicationId).toEqual(medicationId);
  });

  it('Should return deleteDogMedicationError()', function() {
    const error = 'This is an error';
    const action = medicationActions.deleteDogMedicationError(error);
    expect(action.type).toEqual(medicationActions.DELETE_DOG_MEDICATION_ERROR);
    expect(action.error).toEqual(error);
  });

  it('Should return fetchMedicationByIdRequest()', function() {
    const action = medicationActions.fetchMedicationByIdRequest();
    expect(action.type).toEqual(medicationActions.FETCH_MEDICATION_BY_ID_REQUEST);
  });

  it('Should return fetchMedicationByIdSuccess()', function() {
    const medication = {
      name: 'medication'
    };
    const action = medicationActions.fetchMedicationByIdSuccess(medication);
    expect(action.type).toEqual(medicationActions.FETCH_MEDICATION_BY_ID_SUCCESS);
    expect(action.medication).toEqual(medication);
  });

  it('Should return fetchMedicationByIdError()', function() {
    const error = 'This is an error';
    const action = medicationActions.fetchMedicationByIdError(error);
    expect(action.type).toEqual(medicationActions.FETCH_MEDICATION_BY_ID_ERROR);
    expect(action.error).toEqual(error);
  });

  it('Should return updateMedicationByIdRequest()', function() {
    const action = medicationActions.updateMedicationByIdRequest();
    expect(action.type).toEqual(medicationActions.UPDATE_MEDICATION_BY_ID_REQUEST);
  });

  it('Should return updateMedicationByIdSuccess', function() {
    const medication = {
      name: 'medication'
    };
    const action = medicationActions.updateMedicationByIdSuccess(medication);
    expect(action.type).toEqual(medicationActions.UPDATE_MEDICATION_BY_ID_SUCCESS);
    expect(action.medication).toEqual(medication);
  });

  it('Should return updateMedicationByIdError()', function() {
    const error = 'This is an error.';
    const action = medicationActions.updateMedicationByIdError(error);
    expect(action.type).toEqual(medicationActions.UPDATE_MEDICATION_BY_ID_ERROR);
    expect(action.error).toEqual(error);
  });
});
