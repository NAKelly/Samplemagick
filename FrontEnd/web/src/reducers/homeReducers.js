import createReducer from './../lib/createReducer';
import * as types from './../actions/types';

export const widgets = createReducer([], {
  [types.SET_WIDGETS](state, action){
    return action.widgets;
  }
});

export const counter = createReducer(0, {
  [types.UPDATE_COUNTER](state, action){
    return action.counter;
  }
});
