import './css/main.css';
import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/configureStore.js'
import Root from './containers/Root'

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);

