import 'whatwg-fetch';
// import Cookie from './cookie'

const setHeaders = () => {
  var headers;
  // if (Cookie.readCookie('jwt') && Cookie.readCookie('jwt').length > 0) {
  //   headers = {
  //     'Authorization': 'Bearer '+Cookie.readCookie('jwt'),
  //     'Content-Type': 'application/json'
  //   }
  // } else {
  //   headers = {
  //     'Content-Type': 'application/json'
  //   }
  // }
  headers = {
    'Content-Type': 'application/json'
  }
  return headers;
}

class Api {
  // static verifyCookie() {
  //   const cookie = Cookie.readCookie('jwt');
  //   return this.post('users/verify', {cookie: cookie});
  // }

  static get(route) {
    const headers = setHeaders();
    return fetch(window._applicationGlobals.apiUrl + route+'.json', {headers: headers});
  }

  static post(route, params) {
    var headers = setHeaders();
    return fetch(window._applicationGlobals.apiUrl + route+'.json', {
      headers: headers,
      method: 'POST',
      body: JSON.stringify(params)
    });
  }

  static put(route, params) {
    var headers = setHeaders();
    return fetch(window._applicationGlobals.apiUrl + route+'.json', {
      headers: headers,
      method: 'PUT',
      body: JSON.stringify(params)
    });
  }

  static destroy(route, params) {
    var headers = setHeaders();
    return fetch(window._applicationGlobals.apiUrl + route+'.json', {
      headers: headers,
      method: 'DELETE',
      body: JSON.stringify(params)
    });
  }
}


export default Api;