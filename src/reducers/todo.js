import { ITEM_ADD, ITEM_TOGGLE, ITEM_DELETE } from '../actions/ToDoActions'

export default function todo(state = { items: [] }, action) {
  switch (action.type) {
    case ITEM_ADD: {
      const id = action.item.id;
      const newItems = state.items.filter((i) => i.id !== id ).concat(action.item);
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
