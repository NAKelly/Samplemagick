import { combineReducers } from 'redux';
import * as HomeReducers from './homeReducers';

export default combineReducers(Object.assign({}, 
  HomeReducers
));