import { combineReducers } from 'redux'
import sortReducer from './sortReducer'
import filterReducer from './filterReducer'
const rootReducer = combineReducers({
  sort: sortReducer,
  filters: filterReducer
})

export default rootReducer
