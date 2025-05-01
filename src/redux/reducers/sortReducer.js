function sortReducer(state = 'cheapest', action) {
  switch (action.type) {
    case 'SET_SORT':
      return action.payload
    default:
      return state
  }
}

export default sortReducer
