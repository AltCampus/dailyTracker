import axios from 'axios';
const rootUrl = 'http://localhost:3000/api/v1';

const setTokenToAxios = (token) => {
  const newToken = token || localStorage.getItem('authToken') || '';
  axios.defaults.headers.Authorization = newToken;
}

export const getCurrentUser = () => async dispatch => {
  try {
    const res = await axios.get(`${rootUrl}/users/me`);
    dispatch({
      type: 'USER_LOGIN_SUCCESS',
      data: res.data
    })
  }
  catch(err) {
    console.log(err);
  }
}

export const createDailyUpdate = (data) => async dispatch => {
  try {
    const res = await axios.post(`${rootUrl}/daily-updates`, data);
    dispatch({
      type: 'CREATE_DAILY_UPDATE_SUCCESS',
      data: res.data
    })
  }
  catch (err) {
    console.log(err);
  }
}

export const fetchDailyUpdates = () => async dispatch => {
  try {
    const res = await axios.get(`${rootUrl}/daily-updates`);
    dispatch({
      type: 'FETCH_DAILY_UPDATES_SUCCESS',
      data: res.data
    })
  }
  catch (err) {
    console.log(err);
  }
}

export const updateToken = (token) => { 
  localStorage.setItem('authToken', token);
  setTokenToAxios(token);
  return { type: 'UPDATE_TOKEN', data: { token } }
};

export const noToken = () => { return { type: 'NO_TOKEN' } };

export const logOut = () => { 
  localStorage.clear();
  return { type: 'NO_TOKEN' } 
};

