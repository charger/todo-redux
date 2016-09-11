import './css/main.css';
import ReactDOM from 'react-dom';
import React from 'react';
import Root from './containers/Root'

const store = null;
const history = null;

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('app')
);

