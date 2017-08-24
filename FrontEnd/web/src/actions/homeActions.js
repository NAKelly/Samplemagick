import * as types from './types';
import Api from '../lib/api'

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
}


export const login = (email, password, handleErrors, callback) => {
  return(dispatch, getState) => {
    return Api.post('users/sign_in', {email: email, password: password})
      .then(resp => resp.json())
      .then(resp => {
        if (resp !== null) {
          debugger;
          // Cookie.writeCookie('jwt', resp.auth_token, 2);
          // dispatch(verifyCookie());
        } else {
          handleErrors(["Incorrect username password combination"]);
        }
      });
  }
}