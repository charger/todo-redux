import {combineReducers} from 'redux'
import todo from './todo'
import notify from './notify'

const rootReducer = combineReducers({
  todo,
  notify
});

export default rootReducer
