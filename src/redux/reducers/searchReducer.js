const initialState = {
  searchId: ''
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SEARCH_ID': {
      return { ...state, searchId: action.payload }
    }
    default:
      return state
  }
}
