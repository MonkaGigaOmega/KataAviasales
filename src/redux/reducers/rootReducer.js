import { combineReducers } from 'redux'
import sortReducer from './sortReducer'
import filterReducer from './filterReducer'
import searchReducer from './searchReducer'
import ticketsReducer from './ticketsReducer'
const rootReducer = combineReducers({
  sort: sortReducer,
  filters: filterReducer,
  search: searchReducer,
  tickets: ticketsReducer
})

export default rootReducer
