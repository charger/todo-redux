import './css/main.css';
import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/configureStore.js'
import Root from './containers/Root'
import ActionCable from 'actioncable';

const store = configureStore();

const actionCable = ActionCable.createConsumer(process.env.WS_ENDPOINT);
actionCable.subscriptions.create("TodoChannel", {
  connected(q){
    console.log('Connected',q);
  },

  received(action){
    store.dispatch(action);
    console.log('received', action);
  }
});

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);

