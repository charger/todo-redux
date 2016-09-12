import { SET_ERROR_NOTIFY, CLEAR_ERROR_NOTIFY } from '../actions/NotifyActions'

export default function notify(state = { errorText: null }, action) {
  switch (action.type) {
    case SET_ERROR_NOTIFY: {
      return Object.assign({}, state, {errorText: action.text});
    }

    case CLEAR_ERROR_NOTIFY: {
      return Object.assign({}, state, {errorText: null});
    }

    default:
      return state
  }
}
