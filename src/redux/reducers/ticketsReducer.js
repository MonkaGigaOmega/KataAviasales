const initialState = {
  tickets: [],
  loading: false,
  error: null
}

export default function getTickets(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TICKETS_START': {
      return { ...state, loading: true, error: null }
    }
    case 'FETCH_TICKETS_SUCCESS': {
      return { ...state, loading: false, tickets: action.payload }
    }
    case 'FETCH_TICKETS_FAILURE': {
      return { ...state, loading: false, error: action.payload }
    }
    default:
      return state
  }
}
