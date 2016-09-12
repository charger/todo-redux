export const ITEM_ADD = 'ITEM_ADD';
export const ITEM_DELETE = 'ITEM_DELETE';
export const ITEMS_SET = 'ITEMS_SET';
export const ITEM_UPDATED = 'ITEM_UPDATED';
import ToDoApi from '../apis/ToDoApi';
import {setErrorNotify} from '../actions/NotifyActions';

export function itemAdded(item) {  //this is ActionCreator
  return { //This is actually Action
    type: ITEM_ADD,
    item: { id: item.id, title: item.title, is_done: item.is_done }
  }
}

export function itemsLoaded(items) {
  return {
    type: ITEMS_SET,
    items: items
  }
}

export function itemDeleted(id) {
  return {
    type: ITEM_DELETE,
    id: id
  }
}

export function itemUpdated(id, newData) {
  return {
    type: ITEM_UPDATED,
    id,
    newData
  }
}

export function clearList() {
  return (dispatch, getState) => {
    getState()['todo'].items.map(i => dispatch(itemDeleted(i.id)) );
  };
}

export function addItems(title, is_done) {
  return dispatch => {
    let promise = ToDoApi.createItem(title, is_done);
    promise.done(function (response) {
      dispatch(itemAdded(response));
    });

    promise.fail(function (response) {
      console.log('Fail', response);
      dispatch(setErrorNotify(response.statusText));
    });
  };
}

export function deleteItem(id) {
  return dispatch => {
    let promise = ToDoApi.deleteItem(id);
    promise.done(function (response) {
      dispatch(itemDeleted(id));
    });

    promise.fail(function (response) {
      console.log('Fail', response);
      dispatch(setErrorNotify(response.statusText));
    });
  };
}

export function getItems() {
  return dispatch => {
    let promise = ToDoApi.getItems();
    promise.done(function (response) {
      dispatch(itemsLoaded(response));
    });

    promise.fail(function (response) {
      console.log('Fail', response);
      dispatch(setErrorNotify(response.statusText));
    });
  };
}

export function toggleItem(id) {
  return (dispatch, getState) => {
    const oldItem = getState()['todo'].items.find(i => i.id === id );
    let promise = ToDoApi.updateItem(id, {is_done: !oldItem.is_done});
    promise.done(function (response) {
      dispatch(itemUpdated(id, response));
    });

    promise.fail(function (response) {
      console.log('Fail', response);
      dispatch(setErrorNotify(response.statusText));
    });
  };
}

