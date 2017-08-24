import * as types from './types';
// import Api from '../lib/api'

export const updateCounter = (num) => {
  return {
    type: types.UPDATE_COUNTER,
    counter: num
  }
}

export const setWidgets = (widgets) => {
  return {
    type: types.SET_WIDGETS,
    widgets
  }
}

export const fetchWidgets = (params) => {
  return (dispatch, getState) => {
    let widgets = [{title: "Fly my pretties", text: "It was the best of times, it was the blurst of times!"}, {title: "Weasels", text: "Weaseling out of things is what separates us from the animals, except the Weasel!"}];
    dispatch(setWidgets(widgets));
  }
  // // normally we would make an API call
  // return (dispatch, getState) => {
  //   const params = [
  //     `i=${encodeURIComponent(params)}`,
  //     'p=1'
  //   ].join('&')
  //   return Api.get(`/api/?${params}`).then(resp => {
  //     dispatch(mySampleAction({samples: resp}));
  //   }).catch( (ex) => {
  //     console.log(ex);
  //   });
  // }
}