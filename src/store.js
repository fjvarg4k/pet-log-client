import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import authReducer from './reducers/auth';
import dogReducer from './reducers/dog';
import medicationReducer from './reducers/medication';
import { setAuthToken, refreshAuthToken } from './actions/auth';

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    dog: dogReducer,
    medication: medicationReducer
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// const store = createStore(
//   combineReducers({
//     form: formReducer,
//     auth: authReducer,
//     dog: dogReducer,
//     medication: medicationReducer
//   }),
//   applyMiddleware(thunk)
// );

// Loads up auth token if it exists in localStorage
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
