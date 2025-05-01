const initialState = {
  all: false,
  noTransfers: false,
  oneTransfer: false,
  twoTransfers: false,
  threeTransfers: false
}

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_CHECKBOX': {
      const { key, value } = action.payload

      if (key === 'all') {
        return {
          all: value,
          noTransfers: value,
          oneTransfer: value,
          twoTransfers: value,
          threeTransfers: value
        }
      }

      const newState = {
        ...state,
        [key]: value
      }

      const allChecked =
        newState.noTransfers &&
        newState.oneTransfer &&
        newState.twoTransfers &&
        newState.threeTransfers

      return {
        ...newState,
        all: allChecked
      }
    }

    default:
      return state
  }
}
export default filterReducer
