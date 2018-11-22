import * as dogActions from './dog';

describe('Dog Actions', function() {
  it('Should return fetchDogsRequest()', function() {
    const action = dogActions.fetchDogsRequest();
    expect(action.type).toEqual(dogActions.FETCH_DOGS_REQUEST);
  });

  it('Should return fetchDogsSuccess()', function() {
    const dogs = ['Hank', 'Sam'];
    const action = dogActions.fetchDogsSuccess(dogs);
    expect(action.type).toEqual(dogActions.FETCH_DOGS_SUCCESS);
    expect(action.dogs).toEqual(dogs);
  });

  it('Should return fetchDogsError()', function() {
    const error = 'This is an error.';
    const action = dogActions.fetchDogsError(error);
    expect(action.type).toEqual(dogActions.FETCH_DOGS_ERROR);
    expect(action.error).toEqual(error);
  });

  it('Should return createNewDogRequest()', function() {
    const action = dogActions.createNewDogRequest();
    expect(action.type).toEqual(dogActions.CREATE_NEW_DOG_REQUEST);
  });

  it('Should return createNewDogSuccess()', function() {
    const dog = {
      name: 'Sam',
      breed: 'Goldendoodle'
    };
    const action = dogActions.createNewDogSuccess(dog);
    expect(action.type).toEqual(dogActions.CREATE_NEW_DOG_SUCCESS);
    expect(action.dog).toEqual(dog);
  });

  it('Should return createNewDogError()', function() {
    const error = 'This is an error';
    const action = dogActions.createNewDogError(error);
  });

  it('Should return clearDogsOnLogout()', function() {
    const action = dogActions.clearDogsOnLogout();
    expect(action.type).toEqual(dogActions.CLEAR_DOGS_ON_LOGOUT);
  });

  it('Should return fetchDogByIdRequest()', function() {
    const action = dogActions.fetchDogByIdRequest();
    expect(action.type).toEqual(dogActions.FETCH_DOG_BY_ID_REQUEST);
  });

  it('Should return fetchDogByIdSuccess()', function() {
    const dog = {
      name: 'Sam',
      breed: 'Goldendoodle'
    };
    const action = dogActions.fetchDogByIdSuccess(dog);
    expect(action.type).toEqual(dogActions.FETCH_DOG_BY_ID_SUCCESS);
    expect(action.dog).toEqual(dog);
  });

  it('Should return fetchDogByIdError()', function() {
    const error = 'This is an error';
    const action = dogActions.fetchDogByIdError(error);
    expect(action.type).toEqual(dogActions.FETCH_DOG_BY_ID_ERROR);
    expect(action.error).toEqual(error);
  });

  it('Should return updateDogByIdRequest()', function() {
    const action = dogActions.updateDogByIdRequest();
    expect(action.type).toEqual(dogActions.UPDATE_DOG_BY_ID_REQUEST);
  });

  it('Should return updateDogByIdSuccess()', function() {
    const dog = {
      name: 'Sam',
      breed: 'Goldendoodle'
    };
    const action = dogActions.updateDogByIdSuccess(dog);
    expect(action.type).toEqual(dogActions.UPDATE_DOG_BY_ID_SUCCESS);
    expect(action.dog).toEqual(dog);
  });

  it('Should return updateDogByIdError()', function() {
    const error = 'This is an error.';
    const action = dogActions.updateDogByIdError(error);
    expect(action.type).toEqual(dogActions.UPDATE_DOG_BY_ID_ERROR);
    expect(action.error).toEqual(error);
  });

  it('Should return deleteDogByIdRequest()', function() {
    const action = dogActions.deleteDogByIdRequest();
    expect(action.type).toEqual(dogActions.DELETE_DOG_BY_ID_REQUEST);
  });

  it('Should return deleteDogByIdSuccess()', function() {
    const action = dogActions.deleteDogByIdSuccess();
    expect(action.type).toEqual(dogActions.DELETE_DOG_BY_ID_SUCCESS);
  });

  it('Should return deleteDogByIdError()', function() {
    const error = 'This is an error.';
    const action = dogActions.deleteDogByIdError(error);
    expect(action.type).toEqual(dogActions.DELETE_DOG_BY_ID_ERROR);
    expect(action.error).toEqual(error);
  });
});
