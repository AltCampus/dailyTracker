const initialState = {
  user: null,
  token: localStorage.getItem('authToken') || '',
  isAuthenticated: false,
  isAuthInProgress: true
}

function currentUser(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_TOKEN':
      return {
        ...state,
        token: action.data.token
      }
    case 'USER_LOGIN_SUCCESS':
      return {...state,
        user: action.data.user,
        isAuthenticated: true,
        isAuthInProgress: false}
    case 'LOG_OUT':
    case 'NO_TOKEN':
      return {
        ...state,
        isAuthInProgress: false,
        token: '',
        isAuthenticated: false
      }
    default:
      return state;
  }
}

export default currentUser;