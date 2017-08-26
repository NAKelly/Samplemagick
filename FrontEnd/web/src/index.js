import './styles/index.css'

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/containers/App';

import configureStore from './store/configureStore';
const store = configureStore();

// set some application globals:

window._applicationGlobals = {};

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  window._applicationGlobals.apiUrl = "http://localhost:3000/"
  window._applicationGlobals.applicationUrl = "http://localhost:3001/"
} else {
  window._applicationGlobals.apiUrl = "/"
  window._applicationGlobals.applicationUrl = "/"
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);