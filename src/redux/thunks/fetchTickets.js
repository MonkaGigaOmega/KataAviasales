export default function fetchTickets() {
  return async function (dispatch, getState) {
    const searchId = getState().search.searchId
    dispatch({ type: 'FETCH_TICKETS_START' })

    try {
      const res = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
      )
      const data = await res.json()
      dispatch({ type: 'FETCH_TICKETS_SUCCESS', payload: data.tickets })
    } catch (err) {
      dispatch({ type: 'FETCH_TICKETS_FAILURE', payload: err.message })
    }
  }
}
