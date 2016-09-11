export const ITEM_ADD = 'ITEM_ADD';
export const ITEM_TOGGLE = 'ITEM_TOGGLE';
export const ITEM_DELETE = 'ITEM_DELETE';
export const ITEMS_DELETE = 'ITEMS_DELETE';

export function itemAdded(item) {  //this is ActionCreator
  return { //This is actually Action
    type: ITEM_ADD,
    item: { id: item.id, title: item.title, isDone: item.isDone }
  }
}

export function itemDeleted(id) {
  return {
    type: ITEM_DELETE,
    id: id
  }
}
