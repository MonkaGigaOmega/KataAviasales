export default function getSearchId() {
  return async function (dispatch) {
    const res = await fetch('https://aviasales-test-api.kata.academy/search')
    const data = await res.json()
    dispatch({ type: 'SET_SEARCH_ID', payload: data.searchId })
  }
}
