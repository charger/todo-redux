import { ITEM_ADD, ITEM_UPDATED, ITEM_DELETE, ITEMS_SET } from '../actions/ToDoActions'

export default function todo(state = { items: [] }, action) {
  switch (action.type) {
    case ITEM_ADD: {
      const id = action.item.id;
      const newItems = state.items.filter((i) => i.id !== id ).concat(action.item);
      return Object.assign({}, state, {items: newItems});
    }

    case ITEMS_SET: {
      const items = action.items;
      return Object.assign({}, state, {items: items});
    }

    case ITEM_UPDATED: {
      const id = action.id;
      const newData = action.newData;
      const newItems = state.items.map((i) => i.id === id ? newData : i );
      return Object.assign({}, state, {items: newItems});
    }

    case ITEM_DELETE: {
      const id = action.id;
      const newItems = state.items.filter((i) => i.id !== id );
      return Object.assign({}, state, {items: newItems});
    }

    default:
      return state
  }
}
