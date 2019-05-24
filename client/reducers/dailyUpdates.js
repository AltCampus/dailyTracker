const initialState = {
  list: [],
  isFetching: true
}

function dailyUpdates(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_DAILY_UPDATE_SUCCESS':
      return {
        ...state,
        dailyUpdates: action.data
      }
    case 'FETCH_DAILY_UPDATES_SUCCESS':
      return {
        ...state,
        list: action.data.dailyUpdates,
        isFetching: false
      }
    default:
      return state;
  }
}

export default dailyUpdates;