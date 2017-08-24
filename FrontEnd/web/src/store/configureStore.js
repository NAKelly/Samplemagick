import {createStore/*, compose*/, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; // for asynchronous actions
import rootReducer from './../reducers';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}